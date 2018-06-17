import React from "react";
import { FlashMessages } from "../components/FlashMessages";
import renderer from "react-test-renderer";

describe("flash messages - snaphot", () => {
  it("renders correctly", () => {
    const messages = [
      { id: 1, type: "error", text: "Please provide first name" },
      { id: 2, type: "error", text: "Please provide last name" }
    ];
    const tree = renderer.create(<FlashMessages messages={messages}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
