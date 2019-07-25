/* global chrome */

import { connect } from 'react-redux';
import Bookmarks from '../components/Bookmarks';
import {
  actionSetChromeBookmarks,
  actionModalWindowBookmark,
} from '../actions';

const mapStateToProps = (state) => {
  const {
    chromeBookmarks,
    rightClickBookmarksModal,
  } = state;

  return {
    chromeBookmarks,
    rightClickBookmarksModal,
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

    changeContextMenu: () => {
      chrome.contextMenus.removeAll();

      chrome.contextMenus.create({
        "title": 'add bookmark',
        "id": 'addBookmark',
        "contexts": ["page"],
        "documentUrlPatterns": ['chrome-extension://cghmlfkcljlgbpbiclianmkjcmmgkmjb/index.html'],
      });


      chrome.contextMenus.create({
        "title": 'edit bookmark',
        "id": 'editBookmark',
        "contexts": ["link"],
        "documentUrlPatterns": ['chrome-extension://cghmlfkcljlgbpbiclianmkjcmmgkmjb/index.html'],
      });

      chrome.contextMenus.create({
        "title": 'delete bookmark',
        "id": 'deleteBookmark',
        "contexts": ["link"],
        "documentUrlPatterns": ['chrome-extension://cghmlfkcljlgbpbiclianmkjcmmgkmjb/index.html'],
      });

      chrome.contextMenus.onClicked.addListener((clickData) => {
        if (clickData.menuItemId === "addBookmark") {
          const action = {
            modalWindowBookmarkVision: true,
            modalWindowBookmarkId: null,
          };
          dispatch(actionModalWindowBookmark(action));
          console.log(2);
        }
      })
    },

    onRightClickLink: (e, getTreeBookmarks) => {
      let id = e.currentTarget.id;
      console.log(1);

      chrome.contextMenus.onClicked.addListener((clickData) => {
        if (clickData.menuItemId === "editBookmark") {
          console.log(clickData);
          console.log(id);
          const action = {
            modalWindowBookmarkVision: true,
            modalWindowBookmarkId: id,
          };
          dispatch(actionModalWindowBookmark(action));
          // chrome.bookmarks.search(clickData.linkUrl, item => {
          //   console.log(item);
          // })
        } else if (clickData.menuItemId === "deleteBookmark") {
          console.log(clickData);
          console.log(id);
          // chrome.bookmarks.search(clickData.linkUrl, item => {
          //   console.log(item);
          // })
          chrome.bookmarks.remove(id);

          getTreeBookmarks();
        }
      })
    },
  };
};

const BookmarksCNT = connect(mapStateToProps, mapDispatchToProps)(Bookmarks);

export default BookmarksCNT;
