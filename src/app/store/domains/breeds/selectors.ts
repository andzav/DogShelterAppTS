import { createSelector } from 'reselect';
import StoreState from '../../StoreState';

const getMinDisplayAmountSelector = (state: StoreState) => state.breeds.minDisplayAmount;
const getAllImagesSelector = (state: StoreState) => state.breeds.images;
const getBreedsAmountSelector = (state: StoreState) => (state.breeds.minDisplayAmount + 1 > 11
  ? 11
  : state.breeds.minDisplayAmount + 1);

export const getAllImagesDisplay = createSelector(
  getAllImagesSelector,
  getMinDisplayAmountSelector,
  (images, minDisplayAmount) => images.slice(0, minDisplayAmount),
);

export const getAvailableBreeds = createSelector(
  getAllImagesSelector,
  getBreedsAmountSelector,
  (images, minDisplayAmount) => images.slice(1, minDisplayAmount),
);

export const getCatalogImages = createSelector(
  getAllImagesSelector,
  images => images.slice(11, 15),
);

export const getMainImage = createSelector(
  getAllImagesSelector,
  images => images[0] || '',
);

export const getImageCount = createSelector(
  getAllImagesSelector,
  images => images.length,
);
