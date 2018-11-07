export interface IBreedsURL {
  images: string[];
  minDisplayAmount: number;
  isLoading: boolean;
}

export interface IServerResponse extends Response{
  message: string[];
}
