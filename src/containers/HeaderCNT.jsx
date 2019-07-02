import { connect } from 'react-redux';
import Header from '../components/Header';

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

const HeaderCNT = connect(mapStateToProps)(Header);

export default HeaderCNT;
