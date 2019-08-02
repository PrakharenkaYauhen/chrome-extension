/* global chrome */

export const makeChromeContexItem = (title, id, contexts) => {
  chrome.contextMenus.create({
    'title': title,
    'id': id,
    'contexts': contexts,
    'documentUrlPatterns': ['chrome-extension://cghmlfkcljlgbpbiclianmkjcmmgkmjb/index.html'],
  });
}

export const deleteAllChromeContexItems = () => {
  chrome.contextMenus.removeAll();
}

export const getChromeTreeBookmarks = (dispatch, actionSetChromeBookmarks) => {
  chrome.bookmarks.getTree((array) => {
    console.log(array);
    const action = {
      chromeBookmarks: array[0].children[0].children,
    };
    dispatch(actionSetChromeBookmarks(action));
  });
}