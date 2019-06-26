// Container HeaderCNT

import { connect } from 'react-redux'
import Header from '../components/Header'
// import { toggleAsideCustomiztion } from '../actions'

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

// const HeaderCNT = connect(mapStateToProps, mapDispatchToProps)(Header);
const HeaderCNT = connect(mapStateToProps)(Header);

export default HeaderCNT;
