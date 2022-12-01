import geoMidpoint from './geographicMidpoint';
import { getBusinessesByCoordinatesAndCategories, Business } from './yelpApi';
import { Restaurant } from '../commonTypes';
import { Storage } from '../data/Storage';
import axios from 'axios';
import { SERVER_URI } from '../Config';
// import react native location
import GetLocation from 'react-native-get-location';


export async function generateOrderedRestaurantList(locations: Array<{latitude: number, longitude: number}>, categoryAliasLists: Array<Array<string>>, pricePreferences: Array<number>, limit: number | undefined = undefined): Promise<Restaurant[]> {
    const midpoint = geoMidpoint(locations);
    
    // concatenate all preference lists into one list
    const preferenceList: Array<string> = categoryAliasLists.reduce((acc, val) => acc.concat(val), []);
    // remove duplicates and order by element frequency
    const orderedPreferenceList: Array<string> = preferenceList.filter((item, pos) => preferenceList.indexOf(item) == pos).sort((a, b) => preferenceList.filter(v => v === a).length - preferenceList.filter(v => v === b).length).reverse();
    // concatenate all strings and separate by commas
    const orderedPreferenceString: string = orderedPreferenceList.join(',');
    
    // Concatenate price preferences into a comma separated string
    const pricePreferencesString = pricePreferences.join(',');

    // get businesses from Yelp API
    const businesses: Business[] = await getBusinessesByCoordinatesAndCategories(midpoint.latitude, midpoint.longitude, orderedPreferenceString, pricePreferencesString, limit);

    // convert businesses to Restaurant objects
    const restaurants: Restaurant[] = businesses.map(business => businessToRestaurant(business));

    return restaurants;
}

function businessToRestaurant(business: Business): Restaurant {
    return {
        name: business.name,
        thumbnail: business.image_url,
        address: {
            line1: business.location.address1,
            line2: business.location.address2
        },
        priceRating: business.price.length,
        starRating: business.rating,
        reviews: [],
        description: business.categories.map(category => category.title).join(', '),
        distanceMiles: business.distance * 0.000621371
    };
}

export async function generateExploreSections(): Promise<Array<{sectionTitle: string, contentData: any}>> {
    console.log("GENERATING EXPLORE SECTIONS");
    
    const getProfileId = async () => {
        //Get profile info from async storage
        const profile = await Storage.get('profile');
        if (profile) {
            console.log("PROFILE: " + JSON.stringify(profile));
          const profileInfo = JSON.parse(profile);
          return profileInfo.id;
        }
        console.log("PROFILE DOES NOT EXIST");
    };

    const profileId = await getProfileId();

    console.log("PROFILE ID: " + profileId);

    let prefs: string[] = await axios.get(SERVER_URI + "/users/" + profileId + "/prefs").then((response) => response.data.prefs);
    
    console.log("PREFS: " + JSON.stringify(prefs));

    // filter out prefs that have dollar signs
    prefs = prefs.filter((pref) => !pref.includes("$"));

    if (prefs.length >= 3) {
        prefs = prefs.slice(0, 3);
    }
    else {
        prefs = ["pizza", "bars", "coffee"];
    }

    let { latitude, longitude } = await GetLocation.getCurrentPosition({enableHighAccuracy: false, timeout: 15000});

    // get restaurants for each pref
    const restaurants: Restaurant[][] = await Promise.all(prefs.map(async (pref) => {
        const restaurants: Restaurant[] = await generateOrderedRestaurantList([{latitude, longitude}], [[pref]], [1, 2, 3, 4], 10);
        return restaurants;
    }));

    console.log("Restaurants: " + JSON.stringify(restaurants));

    return prefs.map((pref, index) => {
        return {
            sectionTitle: pref,
            contentData: restaurants[index]
        }
    });
}