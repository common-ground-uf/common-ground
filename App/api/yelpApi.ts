import axios from 'axios';
import 'dotenv/config';

// Surface level info about a business
export interface Business {
    rating: number;
    price: string;
    phone: string;
    id: string;
    alias: string;
    is_closed: boolean;
    categories: Array<{
        alias: string;
        title: string;
    }>;
    review_count: number;
    name: string;
    url: string;
    coordinates: {
        latitude: number;
        longitude: number;
    };
    image_url: string;
    location: {
        city: string;
        country: string;
        address2: string;
        address3: string;
        state: string;
        address1: string;
        zip_code: string;
    };
    distance: number;
    transactions: Array<string>;
}

// More detailed info about a business
export interface BusinessDetails {
    id: string;
    alias: string;
    name: string;
    image_url: string;
    is_claimed: boolean;
    is_closed: boolean;
    url: string;
    phone: string;
    display_phone: string;
    review_count: number;
    categories: Array<{
        alias: string;
        title: string;
    }>;
    rating: number;
    location: {
        address1: string;
        address2: string;
        address3: string;
        city: string;
        zip_code: string;
        country: string;
        state: string;
        display_address: Array<string>;
        cross_streets: string;
    };
    coordinates: {
        latitude: number;
        longitude: number;
    };
    photos: Array<string>;
    price: string;
    hours: Array<{
        open: Array<{
            is_overnight: boolean;
            start: string;
            end: string;
            day: number;
        }>;
        hours_type: string;
        is_open_now: boolean;
    }>;
    transactions: Array<string>;
    special_hours?: Array<{
        date: string;
        is_closed: boolean;
        start: string;
        end: string;
        is_overnight: boolean;
    }>;
}

interface BusinessSearchResponse {
    total: number;
    businesses: Array<Business>;
    region: {
        center: {
            latitude: number;
            longitude: number;
        };
    };
}

const yelp = axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ' + process.env.YELP_API_KEY,
    },
});

export async function getBusinessesByLocation(
    location: string
): Promise<Business[]> {
    console.log('API KEY: ' + JSON.stringify(process.env.YELP_API_KEY));

    return (
        (
            await yelp.get('/search', {
                params: {
                    term: 'food',
                    location: location,
                    limit: 50
                },
            })
        ).data as BusinessSearchResponse
    ).businesses;
}

export async function getBusinessesByLocationRange(
    location: string,
    range: number
): Promise<Business[]> {
    return (
        (
            await yelp.get('/search', {
                params: {
                    term: 'food',
                    location: location,
                    radius: range,
                    limit: 50
                },
            })
        ).data as BusinessSearchResponse
    ).businesses;
}

export async function getBusinessDetails(id: string): Promise<BusinessDetails> {
    return (await yelp.get(`/${id}`)).data as BusinessDetails;
}

export async function getBusinessesByCoordinatesAndCategories(
    latitude: number,
    longitude: number,
    categories: String,
    pricePreferences: String
): Promise<Business[]> {
    return (
        (
            await yelp.get('/search', {
                params: {
                    term: 'food',
                    latitude: latitude,
                    longitude: longitude,
                    categories: categories,
                    limit: 50,
                    price: pricePreferences
                },
            })
        ).data as BusinessSearchResponse
    ).businesses;
}
