import geoMidpoint from "./geographicMidpoint";
import { getBusinessesByCoordinatesAndCategories, Business } from "./yelpApi";

export async function generateOrderedRestaurantList(locations: Array<{latitude: number, longitude: number}>, categoryAliasLists: Array<Array<String>>, pricePreferences: Array<BigInteger>): Promise<Business[]> {
    
    let midpoint = geoMidpoint(locations);
    
    // concatenate all preference lists into one list
    let preferenceList: Array<String> = categoryAliasLists.reduce((acc, val) => acc.concat(val), []);
    // remove duplicates and order by element frequency
    let orderedPreferenceList: Array<String> = preferenceList.filter((item, pos) => preferenceList.indexOf(item) == pos).sort((a, b) => preferenceList.filter(v => v === a).length - preferenceList.filter(v => v === b).length).reverse();
    // concatenate all strings and separate by commas
    let orderedPreferenceString: String = orderedPreferenceList.join(",");
    
    // Concatenate price preferences into a comma separated string
    let pricePreferencesString = pricePreferences.join(',');

    // get businesses from Yelp API
    let businesses: Business[] = await getBusinessesByCoordinatesAndCategories(midpoint.latitude, midpoint.longitude, orderedPreferenceString, pricePreferencesString);

    return businesses;
}