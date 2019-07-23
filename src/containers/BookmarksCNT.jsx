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

    changeContextMenu: () => {
      chrome.contextMenus.removeAll();

      let editBookmark = chrome.contextMenus.create({
        "title": 'edit bookmark',
        "id": 'editBookmark',
        "contexts":["link"],
        "documentUrlPatterns": ['chrome-extension://cghmlfkcljlgbpbiclianmkjcmmgkmjb/index.html'],
      });

      let deleteBookmark = chrome.contextMenus.create({
        "title": 'delete bookmark',
        "id": 'deleteBookmark',
        "contexts":["link"],
        "documentUrlPatterns": ['chrome-extension://cghmlfkcljlgbpbiclianmkjcmmgkmjb/index.html'],
        // "onclick": (info, tab) => {
        //   console.log(info);
        //   // console.log(info.linkUrl);
        //   console.log(tab);
        //   chrome.bookmarks.getTree(array => {
        //     let linksArray = array[0].children[0].children;
        //     // console.log(linksArray);
        //     // console.log(linksArray[12].url);
        //     let deletedObject = linksArray.filter(item => item.url === info.linkUrl);
        //     // if(info.linkUrl === linksArray[12].url) {
        //     //   console.log(22222);
        //     // }
        //     console.log(deletedObject[0].id);
        //   });
        // }
      });

      chrome.contextMenus.onClicked.addListener(clickData => {
        if(clickData.menuItemId === "editBookmark") {
          console.log(clickData);
          chrome.bookmarks.search(clickData.linkUrl, item => {
            console.log(item);
          })
        } else if (clickData.menuItemId === "deleteBookmark") {
          console.log(clickData);
        }
      })

      // let child1 = chrome.contextMenus.create({
      //   "title": 'edit bookmark',
      //   "id": 'edit bookmark',
      //   "parentId": parent,
      // });

      // let child2 = chrome.contextMenus.create({
      //   "title": 'delete bookmark',
      //   "id": 'delete bookmark',
      //   "parentId": parent,
      // });
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

    deleteBookmarkLink: (e, id, getTreeBookmarks) => {
      console.log(id);
      chrome.bookmarks.remove(id);

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
