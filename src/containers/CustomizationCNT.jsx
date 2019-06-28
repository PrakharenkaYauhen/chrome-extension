import { connect } from 'react-redux';
import Customization from '../components/Customization';
import { toggleAsideCustomiztion } from '../actions';
import { actionSetCustomization } from '../actions';

const mapStateToProps = (state) => {
  const {
    customizationAside,
    customizationColumnsNumber,
    customizationSiteColor,
  } = state;

  return {
    customizationAside,
    customizationColumnsNumber,
    customizationSiteColor,
  };
};

const root = document.querySelector(':root');

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCustomization: () => {
      const action = {
        customizationAside: false,
      };
      dispatch(toggleAsideCustomiztion(action));
    },

    changeColumns: (e) => {
      root.style.setProperty('--columns-number', +e.target.value);
      let customizationObject = JSON.parse(localStorage.getItem('customization')) || {};
      Object.assign(customizationObject, { 'rowNumber': +e.target.value });
      localStorage.setItem('customization', JSON.stringify(customizationObject));
      const action = {
        customizationColumnsNumber: +e.target.value,
      };
      dispatch(actionSetCustomization(action));
    },

    changeColor: (e) => {
      root.style.setProperty('--main-color', e.target.value);
      console.log()
      let customizationObject = JSON.parse(localStorage.getItem('customization')) || {};
      Object.assign(customizationObject, { 'siteColor': e.target.value });
      localStorage.setItem('customization', JSON.stringify(customizationObject));
      const action = {
        customizationColumnsNumber: e.target.value,
      };
      dispatch(actionSetCustomization(action));
    },
  };
};

const CustomizationCNT = connect(mapStateToProps, mapDispatchToProps)(Customization);

export default CustomizationCNT;
