import { connect } from 'react-redux';
import Customization from '../components/Customization';
import { toggleAsideCustomiztion } from '../actions';

const mapStateToProps = (state) => {
  const {
    customizationAside,
  } = state;

  return {
    customizationAside,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCustomization: () => {
      const action = {
        customizationAside: false,
      };
      dispatch(toggleAsideCustomiztion(action));
    },
  };
};

const CustomizationCNT = connect(mapStateToProps, mapDispatchToProps)(Customization);

export default CustomizationCNT;
