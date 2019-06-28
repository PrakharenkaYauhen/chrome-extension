/* global chrome */

let localStorageSets = (linksArray) => {
  if (chrome.storage) {
    const linksObject = {};
    linksObject.linksArray = JSON.stringify(linksArray);
    chrome.storage.local.set(linksObject, () => {
    });
  } else {
    localStorage.setItem('linksArray', JSON.stringify(linksArray));
  }
};

export default localStorageSets;
