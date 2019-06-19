/* global chrome */

import React from 'react';
import { UserAgent } from '@quentin-sommer/react-useragent';
import logo from './Penguin_2.ico';
import './App.css';

function App() {
  let visitedSitesList;

  let getVisitedSitesList = () => {
    chrome.history.search({
      'text': '',
      'maxResults': 10,
    }, (array) => {
      console.log(array);
      visitedSitesList = array.map(item => `<td>${item.url}</td>`);
      console.log(visitedSitesList);
    });
  }

  getVisitedSitesList();

  console.log(visitedSitesList);

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
                // console.log(chrome);
                chrome.tabs.update(tab.id, {
                  url: 'chrome-search://local-ntp/local-ntp.html',
                });
              });
            }}
          >
            Toggle button
          </button>
          <button
            type="button"
            onClick={() => {
              chrome.history.search({
                'text': '',
                'maxResults': 10,
              }, (array) => {
                console.log(array);
              });
            }}
          >
            History list
          </button>
        </UserAgent>

        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </header>

    </div>
  );
}

export default App;
