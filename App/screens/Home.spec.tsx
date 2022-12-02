import { Home } from './Home';
import { render } from '@testing-library/react-native';
import React from 'react';

describe('Homee', () => {
  const dummyNavigation = {
    navigate: '',
  };
  it('Renders Home correctly', () => {
    const result = render(<Home navigation={dummyNavigation} />);

    expect(result.toJSON()).toMatchSnapshot();
  });
});
