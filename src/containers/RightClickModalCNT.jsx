/* global chrome */

import { connect } from 'react-redux';
import RightClickModal from '../components/RightClickModal';
import {
  actionSetChromeBookmarks,
} from '../actions';

const mapStateToProps = (state) => {
  const {
    rightClickBookmarksModal,
    rightClickBookmarksId,
    rightClickBookmarksModalTop,
    rightClickBookmarksModalLeft,
  } = state;

  return {
    rightClickBookmarksModal,
    rightClickBookmarksId,
    rightClickBookmarksModalTop,
    rightClickBookmarksModalLeft,
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

    deleteBookmarkLink: (e, id, getTreeBookmarks) => {
      console.log(id);
      chrome.bookmarks.remove(id);

      getTreeBookmarks();
    },
  };
};

const RightClickModalCNT = connect(mapStateToProps, mapDispatchToProps)(RightClickModal);

export default RightClickModalCNT;
