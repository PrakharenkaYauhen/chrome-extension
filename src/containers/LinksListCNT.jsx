/* global chrome */

import { connect } from 'react-redux';
import LinksList from '../components/LinksList';
import { actionGetChromeLocalStorage } from '../actions';

const mapStateToProps = (state) => {
  // console.log(state);
  const {
    linksArray,
    linksArrayString,
    pageForTheSlideWindow,
  } = state;

  return {
    linksArray,
    linksArrayString,
    pageForTheSlideWindow,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getChromeLocalStorage: () => {
      if (!chrome.storage) return;
      chrome.storage.local.get('linksArray', (value) => {
        const action = {
          linksArray: JSON.parse(value.linksArray),
        };
        dispatch(actionGetChromeLocalStorage(action));
      });
    },
  };
};

const LinksListCNT = connect(mapStateToProps, mapDispatchToProps)(LinksList);

export default LinksListCNT;
