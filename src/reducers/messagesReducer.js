const messages = (state = [], action) => {
  switch(action.type) {
    case "ADD_MESSAGE":
      return [
        ...state,
        action.message
      ];
    case "REMOVE_MESSAGE":
      return [...state].filter(message => message.id !== action.id);
    default:
      return state;
  }
}
export default messages;