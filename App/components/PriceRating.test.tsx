import {PriceRating} from './PriceRating';
import {render} from '@testing-library/react-native';
import React from 'react';
import {losPollosHermanos} from '../data/dummyRestaurants';

describe('PriceRating', () => {
    it('Renders a Review correctly', () => {
        const result = render(<PriceRating rating={losPollosHermanos.priceRating} />);

        expect(result.toJSON()).toMatchSnapshot();
    });
});
