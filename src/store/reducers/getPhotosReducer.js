import { types } from '../actions';

const initialState = {
  photos: null,
};

export default function getPhotosReducer(store = initialState, action) {
  switch(action.type) {
    case types.GET_PHOTOS_SUCCESS: {
      return {
        ...store,
        photos: action.data,
      };
    }
    case types.GET_PHOTOS_FAIL: {
      return {
        ...store,
        photos: [],
      }
    }
    default: return store;
  }
}