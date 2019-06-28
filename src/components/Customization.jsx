/* global chrome */

import React from 'react';
import PropTypes from 'prop-types';
import penguinBack from '../images/penguin-back.png';
import cross from '../images/cross.png';
// import styles from '../styles/Customization.scss';
import '../styles/Customization.scss';

function Customization({
  customizationAside,
  customizationColumnsNumber,
  customizationSiteColor,
  toggleCustomization,
  changeColumns,
  changeColor,
}) {
  console.log(customizationColumnsNumber);
  // console.log(getComputedStyle(document.querySelector(':root')).getPropertyValue('--columns-number'));
  return (
    // <aside className={!customizationAside ? 'customization' : 'customization customization-hide'}>
    <aside className="customization customization-hide">
      <h2>Extansions settings:</h2>
      <hr />
      <h3>Columns of links:</h3>
      <select
        name="columnsNumber"
        id="columnsNumber"
        tabIndex="51"
        onChange={(e) => { changeColumns(e) }}
        value={customizationColumnsNumber}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
      <h3>Color of the page:</h3>
      <input
        tabIndex="52"
        type="color"
        name=""
        value={customizationSiteColor}
        onChange={(e) => { changeColor(e) }}
      />
      <h3>Drop the page to default settings:</h3>
      <button
        tabIndex="53"
        className="button-default-new-tab-chrome"
        type="button"
        onClick={() => {
          chrome.tabs.getCurrent((tab) => {
            chrome.tabs.update(tab.id, {
              url: 'chrome-search://local-ntp/local-ntp.html',
            });
          });
        }}
      >
        <img src={penguinBack} alt="" />
        {'Default new tab'}
      </button>

      <button
        tabIndex="54"
        className="button-customization-exit"
        type="button"
        onClick={toggleCustomization}
      >
        <img src={cross} alt="" />
        <svg height="44" width="44">
          <circle
            className="circle"
            cx="22"
            cy="22"
            r="22"
            stroke="black"
            strokeWidth="1"
            fillOpacity="0"
          />
          <circle
            className="circle"
            cx="22"
            cy="22"
            r="20"
            stroke="black"
            strokeWidth="1"
            fillOpacity="0"
          />
        </svg>
      </button>
    </aside>
  );
}

Customization.propTypes = {
  customizationAside: PropTypes.bool.isRequired,
  toggleCustomization: PropTypes.func.isRequired,
};

export default Customization;
