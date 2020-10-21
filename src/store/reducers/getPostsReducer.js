import { types } from '../actions';

const initialState = {
  posts: null,
};

export default function getPostsReducer(store = initialState, action) {
  switch(action.type) {
    case types.GET_POSTS_SUCCESS: {
      return {
        ...store,
        posts: action.data,
      };
    }
    case types.GET_POSTS_FAIL: {
      return {
        ...store,
        posts: [],
      }
    }
    default: return store;
  }
}