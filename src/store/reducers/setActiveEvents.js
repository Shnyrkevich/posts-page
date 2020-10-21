import { types } from '../actions';

const initialState = {
  activePhoto: null,
  activePost: null,
};

export default function setActiveContent(store = initialState, action) {
  switch(action.type) {
    case types.SET_ACTIVE_POST: {
      return {
        ...store,
        activePost: action.data,
      };
    }
    case types.SET_ACTIVE_PHOTO: {
      return {
        ...store,
        activePhoto: action.data,
      }
    }
    default: return store;
  }
}