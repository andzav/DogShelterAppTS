import { combineReducers } from 'redux';

import reducer from './domains/breeds/reducer';
import StoreState from './StoreState';

export default combineReducers<StoreState>({
  breeds: reducer,
});
