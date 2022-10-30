import { ContactBubble } from './ContactBubble';
import { render } from '@testing-library/react-native';
import React from 'react';
import { saulProfile } from '../data/dummyUsers';

describe('ContactBubble', () => {
  it('Renders a ContactBubble correctly', () => {
    const result = render(
      <ContactBubble
        profilePic={saulProfile.profilePic}
        firstName={saulProfile.firstName}
        lastName={saulProfile.lastName}
        onPress={() => {}}
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
        onPress={() => {}}
        selected={true}
      />
    );

    expect(result.toJSON()).toMatchSnapshot();
  });
});
