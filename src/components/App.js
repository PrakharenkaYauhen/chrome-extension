/* global chrome */

import React from 'react';
import { UserAgent } from '@quentin-sommer/react-useragent';
import logo from '../images/Penguin_2.ico';
import penguinBack from '../images/penguin-back.png';

import HeaderCNT from '../containers/HeaderCNT';
import ContentCNT from '../containers/ContentCNT';
import TableOfVisitedSitesCNT from '../containers/TableOfVisitedSites';

function App() {
  return (
    <div className="App">
      <HeaderCNT />
      <ContentCNT />
      {/* <div>
        <div>
          <img src={logo} alt="logo" width="100px" />
          <p>Some text</p>
        </div>
      </div> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Chrome extension</p>
        <UserAgent chrome>
          <button
            className="button-default-new-tab-chrome"
            type="button"
            onClick={() => {
              chrome.tabs.getCurrent(tab => {
                // console.log(chrome);
                chrome.tabs.update(tab.id, {
                  url: 'chrome-search://local-ntp/local-ntp.html',
                });
              });
            }}
          >
            <img src={penguinBack} alt="" width="20px" />
            Default new tab
          </button>
        </UserAgent>

        <input
          type="color"
          name=""
          onChange={e => {
            let root = document.querySelector(':root');
            root.style.setProperty('--main-color', e.target.value)
          }}
        />

        <TableOfVisitedSitesCNT />

      </header>

    </div>
  );
}

export default App;
