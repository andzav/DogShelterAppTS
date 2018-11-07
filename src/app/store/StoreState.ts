import { IBreedsURL as BreedState } from './domains/breeds/types';

export default interface IStoreState {
  readonly breeds: BreedState;
}
