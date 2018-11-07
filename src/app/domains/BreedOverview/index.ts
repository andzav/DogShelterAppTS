import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { getSelectedBreedImages, resetGallery, showMore } from '../../store/domains/breeds/actions';
import { getAllImagesDisplay, getImageCount } from '../../store/domains/breeds/selectors';
import StoreState from '../../store/StoreState';
import BreedOverview from './BreedOverview';

const mapStateToProps = (state: StoreState) => ({
  count: getImageCount(state),
  img: getAllImagesDisplay(state),
  isLoading: state.breeds.isLoading,
  minDisplayAmount: state.breeds.minDisplayAmount,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    loadBreeds: getSelectedBreedImages,
    loadMore: showMore,
    refreshGallery: resetGallery,
  },
  dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BreedOverview);
