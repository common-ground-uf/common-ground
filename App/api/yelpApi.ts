import axios from 'axios';

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
    special_hours: Array<{
        date: string;
        is_closed: boolean;
        start: string;
        end: string;
        is_overnight: boolean;
    }>;
}

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

export interface BusinessDetailsResponse {
    businesses: Array<BusinessDetails>;
    total: number;
    region: {
        center: {
            latitude: number;
            longitude: number;
        };
    };
}

export interface BusinessSearchResponse {
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
        Authorization: 'Bearer ' + process.env.YELP_API_KEY
    }
});

export const getBusinessesByLocation = (location: string): Promise<BusinessSearchResponse> => {
    return yelp.get('/search', {
        params: {
            term: 'food',
            location: location,
            limit: 100
        }
    }) as Promise<BusinessSearchResponse>;
};

export const getBusinessesByLocationRange = (location: string, range: number): Promise<BusinessSearchResponse> => {
    return yelp.get('/search', {
        params: {
            term: 'food',
            location: location,
            limit: 100,
            radius: range
        }
    }) as Promise<BusinessSearchResponse>;
};

export const getBusinessDetails = (id: string): Promise<BusinessDetailsResponse> => {
    return yelp.get(`/${id}`) as Promise<BusinessDetailsResponse>;
};
