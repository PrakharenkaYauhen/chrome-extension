// Container ContentCNT

import { connect } from 'react-redux'
import Content from '../components/Content'

// const HeaderCNT = connect(mapStateToProps, mapDispatchToProps)(Header);
const ContentCNT = connect()(Content);

export default ContentCNT;
