import React from 'react';
import { Explore } from './Explore';
import { render } from '@testing-library/react-native';

describe('ProfileScreen', () => {
  const dummyNavigation = {
    navigate: '',
  };

  it('Renders Explore screen correctly', () => {
    const result = render(
      <Explore
        navigation={dummyNavigation}
      />
    );

    expect(result.toJSON()).toMatchSnapshot();
  });

  it('Renders someone else\'s profile correctly', () => {
    const result = render(
      <Explore
        navigation={dummyNavigation}
      />
    );

    expect(result.toJSON()).toMatchSnapshot();
  });
});
