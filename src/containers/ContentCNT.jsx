/* global chrome */

import { connect } from 'react-redux';
import Content from '../components/Content';
import { actionModalWindow, actionGetChromeLocalStorage } from '../actions';
import localStorageSets from '../helpers/localStorageSets';

const mapStateToProps = (state) => {
  console.log(state);
  const {
    linksArray,
    newLink,
  } = state;

  return {
    linksArray,
    newLink,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickOpenModal: (e) => {
      e.preventDefault();
      const action = {
        modalWindowVision: true,
      };
      dispatch(actionModalWindow(action));
    },

    getChromeLocalStorage: () => {
      chrome.storage.local.get('linksArray', (value) => {
        const action = {
          linksArray: JSON.parse(value.linksArray),
        };
        dispatch(actionGetChromeLocalStorage(action));
      });
    },

    deleteLink: (e, linksArray) => {
      const value = e.target.previousElementSibling.lastElementChild.textContent;
      const newLinksArray = linksArray.filter((item) => item.text !== value);
      localStorageSets(newLinksArray);
      const action = {
        linksArray: newLinksArray,
      };
      dispatch(actionGetChromeLocalStorage(action));
    },
  };
};

const ContentCNT = connect(mapStateToProps, mapDispatchToProps)(Content);

export default ContentCNT;
