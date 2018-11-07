import { applyMiddleware, compose, createStore } from 'redux';

import middleware from './middleware';
import rootReducer from './rootReducer';

const middlewares = middleware();

export default function configureStore(preloadedState: {}) {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(...middlewares)),
  );
  return store;
}
