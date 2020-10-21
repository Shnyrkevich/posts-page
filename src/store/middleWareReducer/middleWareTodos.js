import { types } from '../actions';
import { actionCreator } from '../actions';

const middlewareTodos = (store) => (next) => async (action) => {
  switch (action.type) {
    case types.GET_TODOS:
      try {
        store.dispatch(actionCreator.changeFetchingStatus(true));
        const todos = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todosJson = await todos.json();
        console.log(todosJson);
        store.dispatch({
          type: types.GET_TODOS_SUCCESS,
          data: todosJson
        });
      } catch (e) {
        console.log(e);
        store.dispatch({ type: types.GET_TODOS_FAIL });
      }
      store.dispatch(actionCreator.changeFetchingStatus(false));
      break;
    default:
      next(action);
      break;
  }
};

export default middlewareTodos;
