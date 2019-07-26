/* global chrome */

export const makeCromeContexItem = (title, id, contexts) => {
  chrome.contextMenus.create({
    'title': title,
    'id': id,
    'contexts': contexts,
    'documentUrlPatterns': ['chrome-extension://cghmlfkcljlgbpbiclianmkjcmmgkmjb/index.html'],
  });
};

export const deleteAllCromeContexItems = () => {
  chrome.contextMenus.removeAll();
};