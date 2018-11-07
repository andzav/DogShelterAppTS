import apiClient from '../../../services/apiClient';

import {
  BreedActionKeys,
  IGetImagesAction,
  IIncreaseAmountAction,
  IResetAmountAction,
} from './actionTypes';

export const showMore = (): IIncreaseAmountAction => ({
  type: BreedActionKeys.INCREASE_DISPLAY_AMOUNT,
});

export const resetGallery = (): IResetAmountAction => ({
  type: BreedActionKeys.RESET_DISPLAY_AMOUNT,
});

export const getRandomBreedsImages = (): IGetImagesAction => ({
  payload: apiClient.get('https://dog.ceo/api/breeds/image/random/16'),
  type: BreedActionKeys.GET_BREEDS,
});

export const getSelectedBreedImages = (breed: string): IGetImagesAction => ({
  payload: apiClient.get(`https://dog.ceo/api/breed/${breed}/images/random/12`),
  type: BreedActionKeys.GET_BREEDS,
});

export type LoadImages = (breed?: string) => IGetImagesAction;
export type ShowMoreImages = () => IIncreaseAmountAction;
export type ResetGallery = () => IResetAmountAction;
