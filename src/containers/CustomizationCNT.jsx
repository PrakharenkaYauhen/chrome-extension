// Container CustomizationCNT

import { connect } from 'react-redux';
import Customization from '../components/Customization';
import { toggleAsideCustomiztion } from '../actions'

const mapStateToProps = (state) => {
  const {
    customizationAside,
  } = state;

  return {
    customizationAside,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCustomization: () => {
      let action = {
        customizationAside: false,
      }
      dispatch(toggleAsideCustomiztion(action));
    }
  }
}

const CustomizationCNT = connect(mapStateToProps, mapDispatchToProps)(Customization);
// const CustomizationCNT = connect()(Customization);

export default CustomizationCNT;
