import React from "react";
import { EventForm } from "../components/EventForm";
import renderer from "react-test-renderer";
import { defaultState } from "../reducers/fieldsReducer";

describe("event form - snaphot", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<EventForm fields={defaultState}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
