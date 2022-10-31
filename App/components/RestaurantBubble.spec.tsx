import { RestaurantBubble } from './RestaurantBubble';
import { render } from '@testing-library/react-native';
import React from 'react';
import { losPollosHermanos } from '../data/dummyRestaurants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bubble: {
        marginHorizontal: 50,
        display: 'flex',
    },
});

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

describe('RestaurantBubble', () => {
    it('Renders a RestaurantBubble correctly', () => {
        const result = render(
            <RestaurantBubble
                thumbnail={losPollosHermanos.thumbnail}
                name={losPollosHermanos.name}
                onPress={noop}
            />
        );

        expect(result.toJSON()).toMatchSnapshot();
    });

    it('Renders a RestaurantBubble correctly with an addd style prop', () => {
        const result = render(
            <RestaurantBubble
                thumbnail={losPollosHermanos.thumbnail}
                name={losPollosHermanos.name}
                onPress={noop}
                style={styles.bubble}
            />
        );

        expect(result.toJSON()).toMatchSnapshot();
    });
});
