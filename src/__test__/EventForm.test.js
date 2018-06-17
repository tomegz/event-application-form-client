import React from "react";
import renderer from "react-test-renderer";
import { EventForm } from "../components/EventForm";
import { defaultState } from "../reducers/fieldsReducer";

describe("event form - snaphot", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<EventForm fields={defaultState}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
