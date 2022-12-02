/* eslint-disable @typescript-eslint/no-empty-function */
import { GroupBubble } from './GroupBubble';
import { render } from '@testing-library/react-native';
import React from 'react';
import { allUsers } from '../data/dummyUsers';

const noop = () => {};

describe('GroupBubbles', () => {
  it('Returns nothing for a group with 0 people', () => {
    const result = render(
      <GroupBubble name="0 member gang" users={[]} onClick={noop} />
    );

    expect(result.toJSON()).toEqual(null);
  });

  it('Renders a GroupBubble with 1 person', () => {
    const members = allUsers.slice(1);
    const result = render(
      <GroupBubble name="1 member gang" users={members} onClick={noop} />
    );

    expect(result.toJSON()).toMatchSnapshot();
  });

  it('Renders a GroupBubble with 2 people', () => {
    const members = allUsers.slice(2);
    const result = render(
      <GroupBubble name="2 member gang" users={members} onClick={noop} />
    );

    expect(result.toJSON()).toMatchSnapshot();
  });

  it('Renders a GroupBubble with 3 people', () => {
    const members = allUsers.slice(3);
    const result = render(
      <GroupBubble name="3 member gang" users={members} onClick={noop} />
    );

    expect(result.toJSON()).toMatchSnapshot();
  });

  it('Renders a GroupBubble with 4 people', () => {
    const members = allUsers.slice(4);
    const result = render(
      <GroupBubble name="4 member gang" users={members} onClick={noop} />
    );

    expect(result.toJSON()).toMatchSnapshot();
  });

  it('Renders a GroupBubble with 5 people', () => {
    const members = allUsers.slice(5);
    const result = render(
      <GroupBubble name="5 member gang" users={members} onClick={noop} />
    );

    expect(result.toJSON()).toMatchSnapshot();
  });
});
