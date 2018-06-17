import fields, { defaultState } from "../reducers/fieldsReducer";
import messages from "../reducers/messagesReducer";

describe("fields reducer", () => {
  it("should return default state", () => {
    expect(fields(undefined, {})).toEqual(defaultState);
  });
  it("should handle UPDATE_FIELD", () => {
    const action = { type: "UPDATE_FIELD", name: "firstName", value: "John" };
    expect(fields(defaultState, action)).toEqual({ ...defaultState, firstName: "John" });
  });
  it("should handle RESET_FIELDS", () => {
    const action = { type: "RESET_FIELDS" };
    expect(fields(defaultState, action)).toEqual(defaultState);
  });
});

describe("messages reducer", () => {
  it("should return default state", () => {
    expect(messages(undefined, {})).toEqual([]);
  });
  it("should handle ADD_MESSAGE", () => {
    const message = { type: "error", text: "Invalid email address", id: "1" };
    const action = { type: "ADD_MESSAGE", message };
    expect(messages([], action)).toEqual([message]);
  });
  it("should handle REMOVE_MESSAGE", () => {
    const state = [
      { id: "1", type: "error", text: "Invalid email address" },
      { id: "2", type: "error", text: "Please provide first name" },
      { id: "3", type: "error", text: "Please provide last name" }
    ];
    const expectedOutput = [
      state[0],
      state[2]
    ];
    const action = { type: "REMOVE_MESSAGE", id: "2" };
    expect(messages(state, action)).toEqual(expectedOutput);
  });
});