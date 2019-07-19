/* global chrome */

import { connect } from 'react-redux';
import Bookmarks from '../components/Bookmarks';
import { actionSetChromeBookmarks } from '../actions';

const mapStateToProps = (state) => {
  const {
    chromeBookmarks,
  } = state;

  return {
    chromeBookmarks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTreeBookmarks: () => {
      chrome.bookmarks.getTree(array => {
        console.log(array);
        const action = {
          chromeBookmarks: array[0].children[0].children,
        };
        dispatch(actionSetChromeBookmarks(action));
      });
    },
  };
};

const BookmarksCNT = connect(mapStateToProps, mapDispatchToProps)(Bookmarks);

export default BookmarksCNT;
