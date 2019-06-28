import { connect } from 'react-redux';
import SlidingWindowForIcons from '../components/SlidingWindowForIcons';

const mapStateToProps = (state) => {
  const {
    iconsActions,
    pageForTheSlideWindow,
  } = state;

  return {
    iconsActions,
    pageForTheSlideWindow,
  };
};

const SlidingWindowForIconsCNT = connect(mapStateToProps)(SlidingWindowForIcons);

export default SlidingWindowForIconsCNT;
