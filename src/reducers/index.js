import { combineReducers } from 'redux';

import fields from './fieldsReducer';
import messages from './messagesReducer';

export default combineReducers({
  fields,
  messages
});