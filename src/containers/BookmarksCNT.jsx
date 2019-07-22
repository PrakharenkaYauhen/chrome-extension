/* global chrome */

import { connect } from 'react-redux';
import Bookmarks from '../components/Bookmarks';
import {
  actionSetChromeBookmarks,
  actionAddNewBookmark,
  actionBookmarksModal,
} from '../actions';

const mapStateToProps = (state) => {
  const {
    chromeBookmarks,
    newBookmark,
    rightClickBookmarksModal,
  } = state;

  return {
    chromeBookmarks,
    newBookmark,
    rightClickBookmarksModal,
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

    // getElemLength: e => {
    //   console.log(e.target.getBoundingClientRect().width);
    // },

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

    setNewLink: (newBookmark, getTreeBookmarks) => {
      if (chrome.bookmarks) {
        chrome.bookmarks.create({
          'parentId': "1",
          'title': newBookmark.title,
          'url': newBookmark.link
        });
      }

      newBookmark = {
        check: false,
        title: '',
        link: '',
      };
      const action = {
        newBookmark,
      };
      dispatch(actionAddNewBookmark(action));

      getTreeBookmarks();
    },

    onRightClickLink: e => {
      e.preventDefault();
      console.log(e.currentTarget.id);
      console.log(e.clientX);
      console.log(e.clientY);
      const action = {
        rightClickBookmarksModal: true,
        rightClickBookmarksId: e.currentTarget.id,
        rightClickBookmarksModalTop: e.clientY - 37 + 'px',
        rightClickBookmarksModalLeft: e.clientX + 1 + 'px',
      };
      dispatch(actionBookmarksModal(action));
    },

    onClick: e => {
      const action = {
        rightClickBookmarksModal: false,
        rightClickBookmarksId: null,
        rightClickBookmarksModalTop: 0,
        rightClickBookmarksModalLeft: 0,
      };
      dispatch(actionBookmarksModal(action));
    },

    onRightClick: e => {
      // e.preventDefault();
      const action = {
        rightClickBookmarksModal: false,
        rightClickBookmarksId: null,
        rightClickBookmarksModalTop: 0,
        rightClickBookmarksModalLeft: 0,
      };
      dispatch(actionBookmarksModal(action));
    }
  };
};

const BookmarksCNT = connect(mapStateToProps, mapDispatchToProps)(Bookmarks);

export default BookmarksCNT;
