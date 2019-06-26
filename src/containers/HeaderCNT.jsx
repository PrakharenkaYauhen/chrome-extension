import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = (state) => {
  const { 
    iconsActions,
    pageForTheSlideWindow,
  } = state;

  return {
    iconsActions,
    pageForTheSlideWindow,
  }
}

const HeaderCNT = connect(mapStateToProps)(Header);

export default HeaderCNT;
