import { Response } from 'superagent';
import { IServerResponse } from './types';

export enum BreedActionKeys {
  GET_BREEDS = 'BREEDS',
  REQUEST_BREEDS = 'BREEDS_PENDING',
  RECEIVE_BREEDS = 'BREEDS_FULFILLED',
  ERROR_BREEDS = 'BREEDS_REJECTED',
  RESET_DISPLAY_AMOUNT = 'RESET_DISPLAY_AMOUNT',
  INCREASE_DISPLAY_AMOUNT = 'INCREASE_DISPLAY_AMOUNT',
}

export interface IResetAmountAction {
  readonly type: BreedActionKeys.RESET_DISPLAY_AMOUNT;
}

export interface IIncreaseAmountAction {
  readonly type: BreedActionKeys.INCREASE_DISPLAY_AMOUNT;
}

export interface IGetImagesAction {
  readonly payload: Promise<object>;
  readonly type: BreedActionKeys.GET_BREEDS;
}

export interface IGetImagesPendingAction {
  readonly payload: Response;
  readonly type: BreedActionKeys.REQUEST_BREEDS;
}

export interface IGetImagesFulfilledAction {
  readonly payload: IServerResponse;
  readonly type: BreedActionKeys.RECEIVE_BREEDS;
}

export interface IGetImagesRejectedAction {
  readonly payload: Response;
  readonly type: BreedActionKeys.ERROR_BREEDS;
}

export type BreedActionTypes =
  | IResetAmountAction
  | IIncreaseAmountAction
  | IGetImagesAction
  | IGetImagesPendingAction
  | IGetImagesFulfilledAction
  | IGetImagesRejectedAction;
