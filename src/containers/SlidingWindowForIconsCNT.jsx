import { connect } from 'react-redux';
import SlidingWindowForIcons from '../components/SlidingWindowForIcons';

const mapStateToProps = (state) => {
  const {
    sliderWindowVision,
    pageForTheSlideWindow,
  } = state;

  return {
    sliderWindowVision,
    pageForTheSlideWindow,
  };
};

const SlidingWindowForIconsCNT = connect(mapStateToProps)(SlidingWindowForIcons);

export default SlidingWindowForIconsCNT;
