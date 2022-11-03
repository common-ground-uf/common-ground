import { render } from '@testing-library/react-native';
import React from 'react';
import { losPollosHermanos } from '../data/dummyRestaurants';
import { RestaurantScreen } from './RestaurantScreen';

jest.mock(
    'react-native-vector-icons/FontAwesome5',
    () => 'MockedMaterialCommunityIconsicons'
);

jest.mock(
  'react-native-vector-icons/FontAwesome',
  () => 'MockedFontAwesomeIconsicons'
);

describe('ProfileScreen', () => {
  const dummyNavigation = {
    navigate: '',
  };

  it('Renders Restaurant screen correctly', () => {
    const route = {
      params: {
        restaurant: losPollosHermanos,
      },
    };
    const result = render(
      <RestaurantScreen
        restaurant={losPollosHermanos}
        navigation={dummyNavigation}
        route={route}
      />
    );

    expect(result.toJSON()).toMatchSnapshot();
  });
});
