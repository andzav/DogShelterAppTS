import reduxPromiseMiddleware from 'redux-promise-middleware';
import reduxThunk from 'redux-thunk';

export default function create() {
  const middleware = [
    reduxThunk,
    reduxPromiseMiddleware(),
  ];

  return middleware;
}
