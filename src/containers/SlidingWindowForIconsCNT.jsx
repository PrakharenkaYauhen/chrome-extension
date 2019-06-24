import { connect } from 'react-redux'
import SlidingWindowForIcons from '../components/SlidingWindowForIcons'

const mapStateToProps = (state) => {
  const { 
    iconsActions,
  } = state;

  return {
    iconsActions,
  }
}

// const HeaderCNT = connect(mapStateToProps, mapDispatchToProps)(Header);
const SlidingWindowForIconsCNT = connect(mapStateToProps)(SlidingWindowForIcons);

export default SlidingWindowForIconsCNT;
