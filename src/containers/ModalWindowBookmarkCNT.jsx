/* global chrome */

import { connect } from 'react-redux';
import ModalWindowBookmark from '../components/ModalWindowBookmark';
import {
  actionSetChromeBookmarks,
  actionAddNewBookmark,
  actionModalWindowBookmark
} from '../actions';
// import localStorageSets from '../helpers/localStorageSets';

const mapStateToProps = (state) => {
  const {
    newBookmark,
    modalWindowBookmarkVision,
    modalWindowBookmarkId,
  } = state;

  return {
    newBookmark,
    modalWindowBookmarkVision,
    modalWindowBookmarkId,
  };
};

const mapDispatchToProps = (dispatch) => {
  let linkFormCheck;
  let linkNameInputValue;
  let linkAdressInputValue;

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

    onChange: (e) => {
      console.log(e.target.value);
      if (e.target.name === 'linkTitle') {
        linkNameInputValue = e.target.value;
      } else if (e.target.name === 'linkAdress') {
        linkAdressInputValue = e.target.value;
      } else if (e.target.name === 'formOfLink') {
        linkFormCheck = e.target.checked === false ? false : true;
      }

      const newBookmark = {
        check: linkFormCheck,
        title: linkNameInputValue,
        link: linkAdressInputValue,
      };
      const action = {
        newBookmark,
      };
      dispatch(actionAddNewBookmark(action));
    },

    setNewLink: (e, newBookmark, getTreeBookmarks, modalWindowBookmarkId) => {
      if (e.target.textContent !== 'cancel') {
        if (modalWindowBookmarkId) {
          chrome.bookmarks.update(modalWindowBookmarkId, {
            'title': newBookmark.title,
            'url': newBookmark.link
          });
        } else {
          chrome.bookmarks.create({
            'parentId': "1",
            'title': newBookmark.title,
            'url': newBookmark.link
          });
        }
      }

      linkFormCheck = false;
      linkNameInputValue = '';
      linkAdressInputValue = '';

      newBookmark = {
        check: false,
        title: '',
        link: '',
      };
      const action = {
        newBookmark,
      };
      dispatch(actionAddNewBookmark(action));

      const actionWindow = {
        modalWindowBookmarkVision: false,
        modalWindowBookmarkId: null,
      };
      dispatch(actionModalWindowBookmark(actionWindow));

      if (e.target.textContent === 'cancel') return;
      getTreeBookmarks();
    },
  };
};

const ModalWindowBookmarkCNT = connect(mapStateToProps, mapDispatchToProps)(ModalWindowBookmark);

export default ModalWindowBookmarkCNT;
