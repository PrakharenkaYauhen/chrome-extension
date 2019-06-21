// Container HeaderCNT

import { connect } from 'react-redux'
import Header from '../components/Header'
// import { toggleAsideCustomiztion } from '../actions'

// const HeaderCNT = connect(mapStateToProps, mapDispatchToProps)(Header);
const HeaderCNT = connect()(Header);

export default HeaderCNT;
