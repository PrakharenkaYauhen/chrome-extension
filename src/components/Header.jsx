import React from 'react';
import PropTypes from 'prop-types';
import cup from '../images/cup.png';
import weather from '../images/weather.png';
import wrench from '../images/wrench.png';
import book from '../images/book.png';
import magnifier from '../images/magnifier.png';
import bookmarks from '../images/bookmarks.png';
import cross from '../images/cross.png';
import HeaderIconCNT from '../containers/HeaderIconCNT';
// import styles from '../styles/Header.scss';
import '../styles/Header.scss';

function Header(props) {
  const arrayOfWorkingIcons = [
    ['cup', cup],
    ['weather', weather],
    ['book', book],
  ];

  const arrayOfSettingsIcons = [
    ['magnifier', magnifier],
    ['bookmarks', bookmarks],
    ['wrench', wrench],
  ];

  let makeList = (arrayOfIcons) => {
    const correctedArrayOfIcons = arrayOfIcons.map((item) => {
      if (item[0] === props.pageForTheSlideWindow) {
        const newItem = ['cross', cross];
        return newItem;
      }
      return item;
    });

    return correctedArrayOfIcons.map(item => (
      <HeaderIconCNT
        key={item[0]}
        image={item[1]}
        icon={item[0]}
      />));
  }

  const contentOfWorkingIcons = makeList(arrayOfWorkingIcons);
  const contentOfSettingsIcons = makeList(arrayOfSettingsIcons);

  return (
    <div className="header">
      <div>{contentOfWorkingIcons}</div>
      <div>{contentOfSettingsIcons}</div>
    </div>
  );
}

Header.defaultProps = {
  pageForTheSlideWindow: null,
};

Header.propTypes = {
  pageForTheSlideWindow: PropTypes.string,
};

export default Header;
