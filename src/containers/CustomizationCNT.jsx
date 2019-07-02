/* global chrome */

import { connect } from 'react-redux';
import Customization from '../components/Customization';
import {
  toggleAsideCustomiztion,
  actionSetCustomizationColumnNumber,
  actionSetCustomizationLinkSize,
  actionSetCustomizationSiteColor,
  actionSetCustomizationSiteBackground,
} from '../actions';
import setCustomizationLocalStorage from '../helpers/localStorageCustomization';
import setCssVariables from '../helpers/setCssVariables';

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
      setCssVariables('--columns-number', value);
      setCustomizationLocalStorage(value, 'rowNumber');
      const action = {
        customizationColumnsNumber: value,
      };
      dispatch(actionSetCustomizationColumnNumber(action));
    },

    changeLinkSize: (e) => {
      let value = e.target.value;
      setCssVariables('--link-size', value);
      setCustomizationLocalStorage(value, 'linkSize');
      const action = {
        customizationLinkSize: value,
      };
      dispatch(actionSetCustomizationLinkSize(action));
    },

    changeColor: (e) => {
      let value = e.target.value;
      setCssVariables('--main-color', value);
      setCustomizationLocalStorage(value, 'siteColor');
      const action = {
        customizationSiteColor: value,
      };
      dispatch(actionSetCustomizationSiteColor(action));
    },

    changePhotoBackground: (e) => {
      if (e.target.files.length === 0) {
        setCssVariables('--background-photo', null);
        setCustomizationLocalStorage(null, 'backgroundPhoto');
        const action = {
          customizationSiteBackgroundPhoto: null,
        };
        dispatch(actionSetCustomizationSiteBackground(action));
        return;
      }
      const input = e.target;
      const fReader = new FileReader();
      fReader.readAsDataURL(input.files[0]);
      fReader.onloadend = function (event) {
        // var img = document.getElementById("yourImgTag");
        // img.src = event.target.result;
        setCssVariables('--background-photo', `url(${event.target.result}`);
        setCustomizationLocalStorage(`url(${event.target.result})`, 'backgroundPhoto');
        const action = {
          customizationSiteBackgroundPhoto: event.target.result,
        };
        dispatch(actionSetCustomizationSiteBackground(action));
      }
    },

    removePhotoBackground: () => {
      setCssVariables('--background-photo', null);
      setCustomizationLocalStorage(null, 'backgroundPhoto');
      const action = {
        customizationSiteBackgroundPhoto: null,
      };
      dispatch(actionSetCustomizationSiteBackground(action));
    },

    buttonDefaultNewTabChrome: () => {
      chrome.tabs.getCurrent((tab) => {
        chrome.tabs.update(tab.id, {
          url: 'chrome-search://local-ntp/local-ntp.html',
        });
      });
    },
  };
};

const CustomizationCNT = connect(mapStateToProps, mapDispatchToProps)(Customization);

export default CustomizationCNT;
