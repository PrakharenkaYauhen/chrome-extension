import React from 'react';
import PropTypes from 'prop-types';
import cup from '../images/cup.png';
import weather from '../images/weather.png';
import wrench from '../images/wrench.png';
import cross from '../images/cross.png';
import HeaderIconCNT from '../containers/HeaderIconCNT';
// import styles from '../styles/Header.scss';
import '../styles/Header.scss';

function Header(props) {
  const listOfIcons = [['cup', cup], ['weather', weather], ['wrench', wrench]];

  const currentlistOfIcons = listOfIcons.map((item) => {
    if (item[0] === props.pageForTheSlideWindow) {
      const newItem = ['cross', cross];
      return newItem;
    }
    return item;
  });

  const content = currentlistOfIcons.map(item => (
    <HeaderIconCNT
      key={item[0]}
      image={item[1]}
      icon={item[0]}
    />));

  return (
    <div className="header">
      {content}
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
