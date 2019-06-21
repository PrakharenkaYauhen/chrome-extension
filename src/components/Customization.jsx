/* global chrome */

// Component Customization

import React from 'react';
import penguinBack from '../images/penguin-back.png';
import cross from '../images/cross.png';

function Customization({
  customizationAside,
  toggleCustomization,
}) {
  return (
      <aside className={!customizationAside ? "customization" : "customization customization-hide"}>
        <h2>Extansions settings:</h2>
        <hr />
        <h3>Columns of links:</h3>
        <select name="columnsNumber" id="columnsNumber" value="4">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <h3>Color of the page:</h3>
        <input
          type="color"
          name=""
          onChange={e => {
            let root = document.querySelector(':root');
            root.style.setProperty('--main-color', e.target.value)
          }}
        />
        <h3>Drop the page to default settings:</h3>
        <button
          className="button-default-new-tab-chrome"
          type="button"
          onClick={() => {
            chrome.tabs.getCurrent(tab => {
              chrome.tabs.update(tab.id, {
                url: 'chrome-search://local-ntp/local-ntp.html',
              });
            });
          }}
        >
          <img src={penguinBack} alt="" />
          Default new tab
          </button>

        <img src={cross} alt="" onClick={toggleCustomization} />
      </aside>
    );
}

export default Customization;
