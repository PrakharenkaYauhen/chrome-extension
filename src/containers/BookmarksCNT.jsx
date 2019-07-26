/* global chrome */

import { connect } from 'react-redux';
import Bookmarks from '../components/Bookmarks';
import {
  actionSetChromeBookmarks,
  actionModalWindowBookmark,
  actionAddNewBookmark,
} from '../actions';
import {
  deleteAllCromeContexItems,
  makeCromeContexItem,
} from '../helpers/chromeAPI';

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
      chrome.bookmarks.getTree((array) => {
        console.log(array);
        const action = {
          chromeBookmarks: array[0].children[0].children,
        };
        dispatch(actionSetChromeBookmarks(action));
      });
    },

    changeContextMenu: () => {
      deleteAllCromeContexItems();

      makeCromeContexItem('add bookmark', 'addBookmark', ['page']);
      makeCromeContexItem('edit bookmark', 'editBookmark', ['link']);
      makeCromeContexItem('delete bookmark', 'deleteBookmark', ['link']);

      chrome.contextMenus.onClicked.addListener((clickData) => {
        if (clickData.menuItemId === 'addBookmark') {
          const action = {
            modalWindowBookmarkVision: true,
            modalWindowBookmarkId: null,
          };
          dispatch(actionModalWindowBookmark(action));
        }
      });
    },

    onRightClickLink: (e, getTreeBookmarks) => {
      const id = e.currentTarget.id;

      chrome.contextMenus.onClicked.addListener((clickData) => {
        if (clickData.menuItemId === 'editBookmark') {
          chrome.bookmarks.get(id, (result) => {
            const newBookmark = {
              check: false,
              title: result[0].title,
              link: result[0].url,
            };

            const action = {
              newBookmark,
            };
            dispatch(actionAddNewBookmark(action));

            const actionWindow = {
              modalWindowBookmarkVision: true,
              modalWindowBookmarkId: id,
            };
            dispatch(actionModalWindowBookmark(actionWindow));
          });
        } else if (clickData.menuItemId === 'deleteBookmark') {
          chrome.bookmarks.remove(id);

          getTreeBookmarks();
        }
      });
    },
  };
};

const BookmarksCNT = connect(mapStateToProps, mapDispatchToProps)(Bookmarks);

export default BookmarksCNT;
