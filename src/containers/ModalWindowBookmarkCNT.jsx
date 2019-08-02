/* global chrome */

import { connect } from 'react-redux';
import ModalWindowBookmark from '../components/ModalWindowBookmark';
import {
  actionSetChromeBookmarks,
  actionAddNewBookmark,
  actionModalWindowBookmark,
} from '../actions';
import {
  getChromeTreeBookmarks,
} from '../helpers/chromeAPI';

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
    onChange: (e) => {
      if (e.target.name === 'linkTitle') {
        linkNameInputValue = e.target.value;
      } else if (e.target.name === 'linkAdress') {
        linkAdressInputValue = e.target.value;
      } else if (e.target.name === 'formOfLink') {
        linkFormCheck = !e.target.checked ? false : true;
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

    setNewLink: (e, newBookmark, modalWindowBookmarkId) => {
      if (e.target.textContent !== 'cancel') {
        if (modalWindowBookmarkId) {
          chrome.bookmarks.update(modalWindowBookmarkId, {
            title: newBookmark.title,
            url: newBookmark.link,
          });
        } else {
          chrome.bookmarks.create({
            parentId: '1',
            title: newBookmark.title,
            url: newBookmark.link,
          });
        }
      }

      linkFormCheck = false;
      linkNameInputValue = '';
      linkAdressInputValue = '';

      const clearBookmark = {
        check: false,
        title: '',
        link: '',
      };

      const action = {
        newBookmark: clearBookmark,
      };
      dispatch(actionAddNewBookmark(action));

      const actionWindow = {
        modalWindowBookmarkVision: false,
        modalWindowBookmarkId: null,
      };
      dispatch(actionModalWindowBookmark(actionWindow));

      if (e.target.textContent === 'cancel') return;
      getChromeTreeBookmarks(dispatch, actionSetChromeBookmarks)
    },
  };
};

const ModalWindowBookmarkCNT = connect(mapStateToProps, mapDispatchToProps)(ModalWindowBookmark);

export default ModalWindowBookmarkCNT;
