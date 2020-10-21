import { combineReducers } from 'redux';
import getPhotosReducer from './getPhotosReducer';
import getPostsReducer from './getPostsReducer';
import getTodosReducer from './getTodosReducer';
import fetchingStatusReducer from './fetchingStatusReducer';
import setActiveContent from './setActiveEvents';

const rootReducer = combineReducers({
  getPhotosReducer,
  getPostsReducer,
  getTodosReducer,
  fetchingStatusReducer,
  setActiveContent
});

export default rootReducer;