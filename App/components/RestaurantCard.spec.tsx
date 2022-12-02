import { RestaurantCard } from './RestaurantCard';
import { render } from '@testing-library/react-native';
import React from 'react';
import { elCamino, losPollosHermanos } from '../data/dummyRestaurants';

jest.mock(
  'react-native-vector-icons/FontAwesome',
  () => 'MockedFontAwesomeIcons'
);

describe('RestaurantCard', () => {
  const dummyNavigation = {
    navigate: '',
  };

  it('Renders a RestaurantCard correctly', () => {
    const result = render(
      <RestaurantCard navigation={dummyNavigation} {...losPollosHermanos} />
    );

    expect(result.toJSON()).toMatchSnapshot();
  });

  it('Renders another RestaurantCard correctly', () => {
    const result = render(
      <RestaurantCard navigation={dummyNavigation} {...elCamino} />
    );

    expect(result.toJSON()).toMatchSnapshot();
  });
});
