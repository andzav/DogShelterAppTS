import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { getRandomBreedsImages, resetGallery, showMore } from '../../store/domains/breeds/actions';
import {
  getAvailableBreeds,
  getCatalogImages,
  getMainImage,
} from '../../store/domains/breeds/selectors';
import StoreState from '../../store/StoreState';
import Home from './Home';

const mapStateToProps = (state: StoreState) => ({
  availableBreedsImg: getAvailableBreeds(state),
  catalogImg: getCatalogImages(state),
  count: 11,
  headImg: getMainImage(state),
  isLoading: state.breeds.isLoading,
  minDisplayAmount: state.breeds.minDisplayAmount,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    loadBreeds: getRandomBreedsImages,
    loadMore: showMore,
    refreshGallery: resetGallery,
  },
  dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
