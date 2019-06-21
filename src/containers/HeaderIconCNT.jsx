// Container HeaderIconCNT

import { connect } from 'react-redux';
import HeaderIcon from '../components/HeaderIcon';
import { toggleAsideCustomiztion } from '../actions';

const mapStateToProps = (state, props) => {
  const {
    customizationAside,
  } = state;

  const {
    image,
  } = props;

  return {
    customizationAside,
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
