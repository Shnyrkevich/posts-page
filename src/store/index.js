import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from './reducers/rootReducer';
import middlewarePosts from './middleWareReducer/middleWarePosts';
import middlewarePhotos from './middleWareReducer/middleWarePhotos';
import middlewareTodos from './middleWareReducer/middleWareTodos';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(
    middlewarePhotos,
    middlewarePosts,
    middlewareTodos
  ))
);

export default store;