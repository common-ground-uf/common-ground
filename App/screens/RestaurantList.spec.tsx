import { allRestaurants } from '../data/dummyRestaurants';
import { RestaurantList } from './RestaurantList';
import { render } from '@testing-library/react-native';
import React from 'react';

jest.mock(
    'react-native-vector-icons/FontAwesome',
    () => 'MockedFontAwesomeicons'
);

describe('RestaurantList', () => {
    const dummyNavigation = {
        navigate: '',
    };

    it('Renders RestaurantListPage correctly', () => {
        const route = {
            params: {
                restaurantList: allRestaurants,
            },
        };
        const result = render(
            <RestaurantList
                restaurantList={allRestaurants}
                navigation={dummyNavigation}
                route={route}
            />
        );

        expect(result.toJSON()).toMatchSnapshot();
    });

    it('Handles when there are no restaurants', () => {
        const route = {
            params: {
                restaurantList: [],
            },
        };
        const result = render(
            <RestaurantList
                restaurantList={[]}
                navigation={dummyNavigation}
                route={route}
            />
        );

        expect(result.toJSON()).toMatchSnapshot();
    });
});
