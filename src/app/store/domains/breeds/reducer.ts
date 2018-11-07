import { IBreedsURL } from './types';

import {
  BreedActionKeys,
  BreedActionTypes,
} from './actionTypes';

const breedsInitialState: IBreedsURL = {
  images: [],
  isLoading: false,
  minDisplayAmount: 3,
};

const breedsReducer = (
  state: IBreedsURL = breedsInitialState,
  action: BreedActionTypes,
): IBreedsURL => {
  switch (action.type) {
    case BreedActionKeys.REQUEST_BREEDS:
      return { ...state, isLoading: true, images: [] };

    case BreedActionKeys.RECEIVE_BREEDS:
      return { ...state, isLoading: false, images: action.payload.message };

    case BreedActionKeys.ERROR_BREEDS:
      return { ...state, isLoading: false, images: [] };

    case BreedActionKeys.INCREASE_DISPLAY_AMOUNT:
      return { ...state, minDisplayAmount: state.minDisplayAmount + 3 };

    case BreedActionKeys.RESET_DISPLAY_AMOUNT:
      return { ...state, minDisplayAmount: 3 };

    default: return state;
  }
};

export default breedsReducer;
