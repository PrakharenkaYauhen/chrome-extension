/* global chrome */

import { connect } from 'react-redux';
import Content from '../components/Content';
import { actionModalWindow, actionGetChromeLocalStorage } from '../actions';

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
  };
};

const ContentCNT = connect(mapStateToProps, mapDispatchToProps)(Content);

export default ContentCNT;
