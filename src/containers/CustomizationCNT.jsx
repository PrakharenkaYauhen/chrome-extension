import { connect } from 'react-redux';
import Customization from '../components/Customization';
import { 
  toggleAsideCustomiztion,
  actionSetCustomizationColumnNumber,
  actionSetCustomizationLinkSize,
  actionSetCustomizationSiteColor,
 } from '../actions';
import setCustomizationLocalStorage from '../helpers/localStorageCustomization';

const mapStateToProps = (state) => {
  const {
    customizationAside,
    customizationColumnsNumber,
    customizationLinkSize,
    customizationSiteColor,
  } = state;

  return {
    customizationAside,
    customizationColumnsNumber,
    customizationLinkSize,
    customizationSiteColor,
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

    changeColumns: (e) => {
      let value = +e.target.value;
      setCustomizationLocalStorage(value, 'rowNumber', '--columns-number');
      const action = {
        customizationColumnsNumber: value,
      };
      dispatch(actionSetCustomizationColumnNumber(action));
    },

    changeLinkSize: (e) => {
      let value = e.target.value;
      setCustomizationLocalStorage(value, 'linkSize', '--link-size');
      const action = {
        customizationLinkSize: value,
      };
      dispatch(actionSetCustomizationLinkSize(action));
    },

    changeColor: (e) => {
      let value = e.target.value;
      setCustomizationLocalStorage(value, 'siteColor', '--main-color');
      const action = {
        customizationSiteColor: value,
      };
      dispatch(actionSetCustomizationSiteColor(action));
    },
  };
};

const CustomizationCNT = connect(mapStateToProps, mapDispatchToProps)(Customization);

export default CustomizationCNT;
