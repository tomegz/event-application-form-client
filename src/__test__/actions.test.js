import * as actions from "../actions/actionCreators";

describe("action creators", () => {
  it("should create an action to add flash message", () => {
    const message = { text: "Invalid email", type: "error" };
    const expectedAction = {
      type: "ADD_MESSAGE",
      message
    };
    expect(actions.addMessage(message)).toEqual(expectedAction);
  });
  it("should create an action to remove flash message with its ID", () => {
    const id = 1;
    const expectedAction = {
      type: "REMOVE_MESSAGE",
      id
    };
    expect(actions.removeMessage(id)).toEqual(expectedAction);
  });
  it("should create an action to update field with its name and value", () => {
    const name = "firstName";
    const value = "John";
    const expectedAction = {
      type: "UPDATE_FIELD",
      name,
      value
    };
    expect(actions.updateField(name, value)).toEqual(expectedAction);
  });
  it("should create an action to reset all fields", () => {
    const expectedAction = {
      type: "RESET_FIELDS"
    };
    expect(actions.resetFields()).toEqual(expectedAction);
  });
});