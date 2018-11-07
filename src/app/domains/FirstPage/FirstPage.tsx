import * as React from 'react';

import AvailableBreeds from '../../components/AvailableBreeds';
import WithSpinner from '../../components/Spinner/WithSpinner';
import './index.css';

const AvailableBreedsWithSpinner = WithSpinner()(AvailableBreeds);

export interface IAppProps extends React.Props<FirstPage> {
  count: number;
  isLoading: boolean;
  img: string[];
  match: {params: any};
  minDisplayAmount: number;
  loadBreeds(): any;
  loadMore(): any;
  refreshGallery(): any;
}

class FirstPage extends React.Component<IAppProps> {
  public render() {
    const {
      img,
      minDisplayAmount,
      isLoading,
      loadMore,
      count,
    } = this.props;
    return (
      <div className="firstPage">
        <AvailableBreedsWithSpinner
          imgAvailable={img}
          onClick={loadMore}
          isLoading={isLoading}
          count={count}
          minDisplayAmount={minDisplayAmount}
          title="Dog Shelter"/>
        <div className="form">
          <h2>Leave your review</h2>
          <input type="text" placeholder="Fullname"/>
          <textarea placeholder="Description"/>
          <input type="submit"/>
        </div>
      </div>
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

export default FirstPage;
