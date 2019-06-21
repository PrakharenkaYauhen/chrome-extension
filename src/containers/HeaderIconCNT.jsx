// Container HeaderIconCNT

import { connect } from 'react-redux';
import HeaderIcon from '../components/HeaderIcon';
import { toggleAsideCustomiztion } from '../actions';

const mapStateToProps = (state, props) => {
  const {
    image,
  } = props;

  return {
    image,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCustomization: () => {
      let action = {
        customizationAside: true,
      }
      dispatch(toggleAsideCustomiztion(action));
    }
  }
}

const HeaderIconCNT = connect(mapStateToProps, mapDispatchToProps)(HeaderIcon);

export default HeaderIconCNT;
