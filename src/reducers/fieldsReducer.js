export const defaultState = {
  firstName: "",
  lastName: "",
  email: "",
  eventDate: {
    timestamp: null,
    year: null,
    month: null,
    day: null
  }
}

const fields = (state = defaultState, action) => {
  switch(action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.name]: action.value
      }
    case "RESET_FIELDS":
      return {
        ...defaultState
      }
    default:
      return state;
  }
}
export default fields;