export const addMessage = (message) => {
  return {
    type: "ADD_MESSAGE",
    message
  };
}

export const removeMessage = (id) => {
  return {
    type: "REMOVE_MESSAGE",
    id
  };
}

export const updateField = (name, value) => {
  return {
    type: "UPDATE_FIELD",
    name,
    value
  }
}

export const resetFields = () => {
  return {
    type: "RESET_FIELDS"
  }
}
