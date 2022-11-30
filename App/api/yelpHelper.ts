import geoMidpoint from './geographicMidpoint';
import { getBusinessesByCoordinatesAndCategories, Business } from './yelpApi';
import { Restaurant } from '../commonTypes';

export async function generateOrderedRestaurantList(locations: Array<{latitude: number, longitude: number}>, categoryAliasLists: Array<Array<string>>, pricePreferences: Array<BigInteger>): Promise<Restaurant[]> {
    
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
    const businesses: Business[] = await getBusinessesByCoordinatesAndCategories(midpoint.latitude, midpoint.longitude, orderedPreferenceString, pricePreferencesString);

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
    }
}