import { GroupBubbles } from "./GroupBubbles";
import { render } from "@testing-library/react-native";
import React from "react";
import { allUsers } from "../data/dummyUsers";

describe("GroupBubbles", () => {
  it("Renders a GroupBubble with 1 person", () => {
    const members = allUsers.slice(1);
    const result = render(
      <GroupBubbles name="2 member gang" members={members} onClick={() => {}} />
    );

    expect(result.toJSON()).toMatchSnapshot();
  });

  it("Renders a GroupBubble with 2 people", () => {
    const members = allUsers.slice(2);
    const result = render(
      <GroupBubbles name="2 member gang" members={members} onClick={() => {}} />
    );

    expect(result.toJSON()).toMatchSnapshot();
  });

  it("Renders a GroupBubble with 3 people", () => {
    const members = allUsers.slice(3);
    const result = render(
      <GroupBubbles name="2 member gang" members={members} onClick={() => {}} />
    );

    expect(result.toJSON()).toMatchSnapshot();
  });

  it("Renders a GroupBubble with 4 people", () => {
    const members = allUsers.slice(4);
    const result = render(
      <GroupBubbles name="2 member gang" members={members} onClick={() => {}} />
    );

    expect(result.toJSON()).toMatchSnapshot();
  });

  it("Renders a GroupBubble with 5 people", () => {
    const members = allUsers.slice(5);
    const result = render(
      <GroupBubbles name="2 member gang" members={members} onClick={() => {}} />
    );

    expect(result.toJSON()).toMatchSnapshot();
  });
});