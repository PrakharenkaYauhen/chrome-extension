/* global chrome */

import React from 'react';
import { UserAgent } from '@quentin-sommer/react-useragent';
import logo from './Penguin_2.ico';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Chrome extension</p>
        <UserAgent chrome>
          <button 
          type="button"
          onClick={() => {
            chrome.tabs.getCurrent(tab => {
              chrome.tabs.update(tab.id, {
                url: 'chrome-search://local-ntp/local-ntp.html',
              });
            });
          }}
          >
            Toggle button
          </button>
          {/* <Button
            appearance="subtle"
            onClick={() => {
              chrome.tabs.getCurrent(tab => {
                chrome.tabs.update(tab.id, {
                  url: 'chrome-search://local-ntp/local-ntp.html',
                });
              });
            }}
            iconBefore={
              <ChromeIcon height={20} width={20} fill="currentColor" />
            }
          >
            Chrome Tab
          </Button> */}
        </UserAgent>
      </header>

    </div>
  );
}

export default App;
