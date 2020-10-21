import { types } from '../actions';
import { actionCreator } from '../actions';

const middlewarePosts = (store) => (next) => async (action) => {
  switch (action.type) {
    case types.GET_POSTS:
      try {
        store.dispatch(actionCreator.changeFetchingStatus(true));
        const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
        const postsJson = await posts.json();
        store.dispatch({
          type: types.GET_POSTS_SUCCESS,
          data: postsJson
        });
      } catch (e) {
        console.log(e);
        store.dispatch({ type: types.GET_POSTS_FAIL });
      }
      store.dispatch(actionCreator.changeFetchingStatus(false));
      break;
    default:
      next(action);
      break;
  }
};

export default middlewarePosts;
