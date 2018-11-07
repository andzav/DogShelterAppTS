import * as React from 'react';

import AvailableBreeds from '../../components/AvailableBreeds';
import WithSpinner from '../../components/Spinner/WithSpinner';

const AvailableBreedsWithSpinner = WithSpinner()(AvailableBreeds);

export interface IAppProps extends React.Props<BreedOverviewPage> {
  count: number;
  isLoading: boolean;
  img: string[];
  match: {params: any};
  minDisplayAmount: number;
  loadBreeds(breeds?: string): any;
  loadMore(): any;
  refreshGallery(): any;
}

class BreedOverviewPage extends React.Component<IAppProps> {
  public render() {
    const {
      isLoading,
      minDisplayAmount,
      loadMore,
      img,
      match,
      count,
    } = this.props;
    const title = img.length > 0 ? match.params.breed : 'No images found. Sorry';
    return (
      <React.Fragment>
        <AvailableBreedsWithSpinner
          imgAvailable={img}
          onClick={loadMore}
          count={count}
          isLoading={isLoading}
          minDisplayAmount={minDisplayAmount}
          title={title}/>
      </React.Fragment>
    );
  }

  public componentDidMount() {
    const {
      loadBreeds,
      refreshGallery,
      match,
    } = this.props;
    loadBreeds(match.params.breed);
    refreshGallery();
  }
}

export default BreedOverviewPage;
