// Container HeaderCNT

import { connect } from 'react-redux'
import Header from '../components/Header'

// const HeaderCNT = connect(mapStateToProps, mapDispatchToProps)(Header);
const HeaderCNT = connect()(Header);

export default HeaderCNT;
