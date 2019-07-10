/* global chrome */

import { connect } from 'react-redux';
import LinksList from '../components/LinksList';
import { actionGetChromeLocalStorage } from '../actions';

const mapStateToProps = (state, props) => {
  const {
    linksArray,    
  } = state;

  const {
    innerRef,
    provided,
  } = props;

  // console.log(props);

  return {
    linksArray,
    innerRef,
    provided,
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
