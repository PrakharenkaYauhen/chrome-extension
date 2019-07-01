import React from 'react';
import PropTypes from 'prop-types';
import penguinBack from '../images/penguin-back.png';
import cross from '../images/cross.png';
// import styles from '../styles/Customization.scss';
import '../styles/Customization.scss';

function Customization({
  customizationAside,
  customizationColumnsNumber,
  customizationLinkSize,
  customizationSiteColor,
  buttonDefaultNewTabChrome,
  toggleCustomization,
  changeColumns,
  changeLinkSize,
  changeColor,
  changePhotoBackground,
}) {
  // console.log(getComputedStyle(document.querySelector(':root')).getPropertyValue('--columns-number'));
  return (
    <aside className={!customizationAside ? 'customization' : 'customization customization-hide'}>
      {/* <aside className="customization customization-hide"> */}
      <h2>Extansion&apos;s settings:</h2>
      <hr />
      <h3>Number of columns:</h3>
      <select
        name="columnsNumber"
        id="columnsNumber"
        tabIndex="51"
        onChange={(e) => { changeColumns(e); }}
        value={customizationColumnsNumber}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
      <h3>Links size:</h3>
      <select
        name="linkSize"
        id="linkSize"
        tabIndex="52"
        onChange={(e) => { changeLinkSize(e); }}
        value={customizationLinkSize}
      >
        <option value="150px">small</option>
        <option value="200px">medium</option>
        <option value="250px">large</option>
      </select>
      <h3>Color of the page:</h3>
      <input
        tabIndex="53"
        type="color"
        name=""
        value={customizationSiteColor}
        onChange={(e) => { changeColor(e); }}
      />
      <h3>You can use your image for the background:</h3>
      <form
        method="post"
        encType="multipart/form-data"
        action="..\upload">
        <input
          type="file"
          name="inputBG"
          id="inputBG"
          onChange={(e) => { changePhotoBackground(e); }}
        />
        <div>
          <input type="submit" value="send file" />
        </div>
      </form>
      <img src="" alt="" id='yourImgTag'/>
      <h3>Drop the page to default settings:</h3>
      <button
        tabIndex="54"
        className="button-default-new-tab-chrome"
        type="button"
        onClick={buttonDefaultNewTabChrome}
      >
        <img src={penguinBack} alt="" />
        {'Default new tab'}
      </button>

      <button
        tabIndex="55"
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
            strokeWidth="1"
            fillOpacity="0"
          />
          <circle
            className="circle"
            cx="22"
            cy="22"
            r="20"
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
  customizationColumnsNumber: PropTypes.number.isRequired,
  customizationLinkSize: PropTypes.string.isRequired,
  customizationSiteColor: PropTypes.string.isRequired,
  buttonDefaultNewTabChrome: PropTypes.func.isRequired,
  toggleCustomization: PropTypes.func.isRequired,
  changeColumns: PropTypes.func.isRequired,
  changeLinkSize: PropTypes.func.isRequired,
  changeColor: PropTypes.func.isRequired,
  changePhotoBackground: PropTypes.func.isRequired,
};

export default Customization;
