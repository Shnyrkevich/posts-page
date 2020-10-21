import { types } from '../actions';
import { actionCreator } from '../actions';

const middlewarePhotos = (store) => (next) => async (action) => {
  switch (action.type) {
    case types.GET_PHOTOS:
      try {
        store.dispatch(actionCreator.changeFetchingStatus(true));
        const photos = await fetch('https://jsonplaceholder.typicode.com/photos');
        const photosJson = await photos.json();
        store.dispatch({
          type: types.GET_PHOTOS_SUCCESS,
          data: photosJson
        });
      } catch (e) {
        console.log(e);
        store.dispatch({ type: types.GET_PHOTOS_FAIL });
      }
      store.dispatch(actionCreator.changeFetchingStatus(false));
      break;
    default:
      next(action);
      break;
  }
};

export default middlewarePhotos;
