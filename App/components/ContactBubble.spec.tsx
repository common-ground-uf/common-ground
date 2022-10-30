import { ContactBubble } from './ContactBubble';
import { render } from '@testing-library/react-native';
import React from 'react';
import { saulProfile } from '../data/dummyUsers';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

describe('ContactBubble', () => {
  it('Renders a ContactBubble correctly', () => {
    const result = render(
      <ContactBubble
        profilePic={saulProfile.profilePic}
        firstName={saulProfile.firstName}
        lastName={saulProfile.lastName}
        onPress={noop}
      />
    );

    expect(result.toJSON()).toMatchSnapshot();
  });

  it('Renders a ContactBubble correctly when it is selected', () => {
    const result = render(
      <ContactBubble
        profilePic={saulProfile.profilePic}
        firstName={saulProfile.firstName}
        lastName={saulProfile.lastName}
        onPress={noop}
        selected={true}
      />
    );

    expect(result.toJSON()).toMatchSnapshot();
  });
});
