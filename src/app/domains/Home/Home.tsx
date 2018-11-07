import * as React from 'react';

import AvailableBreeds from '../../components/AvailableBreeds';
import Catalog from '../../components/Catalog';
import Overview from '../../components/Overview';
import WithSpinner from '../../components/Spinner/WithSpinner';

const AvailableBreedsWithSpinner = WithSpinner()(AvailableBreeds);
const CatalogWIthSpinner = WithSpinner()(Catalog);

export interface IAppProps extends React.Props<HomePage> {
  count: number;
  availableBreedsImg: string[];
  catalogImg: string[];
  headImg: string;
  isLoading: boolean;
  minDisplayAmount: number;
  loadBreeds(): any;
  loadMore(): any;
  refreshGallery(): any;
}

class HomePage extends React.Component<IAppProps> {
  public render() {
    const {
      count,
      headImg,
      isLoading,
      minDisplayAmount,
      loadMore,
      catalogImg,
      availableBreedsImg,
    } = this.props;
    return (
      <React.Fragment>
        <Overview headImg={headImg}/>
        <hr/>
        <AvailableBreedsWithSpinner
          count={count}
          imgAvailable={availableBreedsImg}
          onClick={loadMore}
          isLoading={isLoading}
          minDisplayAmount={minDisplayAmount}
          title="Available Breeds"/>
        <hr/>
        <CatalogWIthSpinner
          imgCatalog={catalogImg}
          isLoading={isLoading}/>
      </React.Fragment>
    );
  }

  public componentDidMount() {
    const {
      loadBreeds,
      refreshGallery,
    } = this.props;
    loadBreeds();
    refreshGallery();
  }
}

export default HomePage;
