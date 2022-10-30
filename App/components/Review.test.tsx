import {Review} from './Review';
import {render} from '@testing-library/react-native';
import React from 'react';
import {losPollosHermanos} from '../data/dummyRestaurants';

describe('Review', () => {
    it('Renders a Review correctly', () => {
        const result = render(<Review {...losPollosHermanos.reviews[0]} />);

        expect(result.toJSON()).toMatchSnapshot();
    });
});
