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
    buttonDefaultNewTabChrome: () => {
      chrome.tabs.getCurrent((tab) => {
        chrome.tabs.update(tab.id, {
          url: 'chrome-search://local-ntp/local-ntp.html',
        });
      });
    },

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

    changePhotoBackground: (e) => {
      let value = e.target.value;
      console.log(e);
      console.log(e.target.files);
      var input = document.getElementById("inputBG");
      var fReader = new FileReader();
      fReader.readAsDataURL(input.files[0]);
      console.log(input);
      fReader.onloadend = function (event) {
        console.log(event);
        // var img = document.getElementById("yourImgTag");
        // img.src = event.target.result;
        setCustomizationLocalStorage(`url(${event.target.result})`, 'backgroundPhoto', '--background-photo');
        const action = {
          customizationSiteBackgroundPhoto: event.target.result,
        };
        dispatch(actionSetCustomizationSiteBackground(action));
      }

      // setCustomizationLocalStorage(value, 'backgroundPhoto', '--background-photo');
      // const action = {
      //   customizationSiteBackgroundPhoto: value,
      // };
      // dispatch(actionSetCustomizationSiteBackground(action));
    },
  };
};

const CustomizationCNT = connect(mapStateToProps, mapDispatchToProps)(Customization);

export default CustomizationCNT;
