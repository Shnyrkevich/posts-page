import { types } from '../actions';

const initialState = {
  isFetcing: false,
};

export default function fetchingStatusReducer(store = initialState, action) {
  switch(action.type) {
    case types.CHANGE_FETCHING_STATUS: {
      return {
        ...store,
        isFetcing: action.data,
      };
    }
    default: return store;
  }
}