import { combineReducers } from 'redux';
import app from './app';
import events from './events';
import dialog from './dialog';
import user from './user';

const rootReducer = combineReducers({
  app,
  events,
  dialog,
  user,
  
});

export default rootReducer;
