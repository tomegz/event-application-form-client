import React from "react";
import renderer from "react-test-renderer";
import { EventForm } from "../components/EventForm";
import { defaultState } from "../reducers/fieldsReducer";

describe("event form - snaphot", () => {
  it("renders correctly", () => {
    const el = (
      <EventForm 
        fields={defaultState}
        addMessage={() => ""} // would fail on prop-types check without passing a function
        updateField={() => ""}
        resetFields={() => ""} />
    );
    const tree = renderer.create(el).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
