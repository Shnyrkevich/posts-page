import { types } from '../actions';

const initialState = {
  todos: null,
};

export default function getTodosReducer(store = initialState, action) {
  switch(action.type) {
    case types.GET_TODOS_SUCCESS: {
      return {
        ...store,
        todos: action.data,
      };
    }
    case types.GET_TODOS_FAIL: {
      return {
        ...store,
        todos: [],
      }
    }
    default: return store;
  }
}