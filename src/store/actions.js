export const types = {
  GET_PHOTOS: 'GET_PHOTOS',
  GET_POSTS: 'GET_POSTS',
  GET_TODOS: 'GET_TODOS',
  GET_PHOTOS_FAIL: 'GET_PHOTOS_FAIL',
  GET_POSTS_FAIL: 'GET_POSTS_FAIL',
  GET_TODOS_FAIL: 'GET_TODOS_FAIL',
  GET_PHOTOS_SUCCESS: 'GET_PHOTOS_SUCCESS',
  GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',
  GET_TODOS_SUCCESS: 'GET_TODOS_SUCCESS',
  CHANGE_FETCHING_STATUS: 'CHANGE_FETCHING_STATUS',
  SET_ACTIVE_PHOTO: 'SET_ACTIVE_PHOTO',
  SET_ACTIVE_POST: 'SET_ACTIVE_POST',
};

export const actionCreator = {
  getPosts: () => ({ type: types.GET_POSTS }),
  getPhotos: () => ({ type: types.GET_PHOTOS }),
  getTodos: () => ({ type: types.GET_TODOS }),
  changeFetchingStatus: (status) => ({ type: types.CHANGE_FETCHING_STATUS, data: status}),
  setActivePost: (post) => ({ type: types.SET_ACTIVE_POST, data: post }),
  setActivePhoto: (photo) => ({ type: types.SET_ACTIVE_PHOTO, data: photo })
}