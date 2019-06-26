// Component Header

import React from 'react';
// import PropTypes from 'prop-types';
import cup from '../images/cup.png';
import weather from '../images/weather.png';
import wrench from '../images/wrench.png';
import cross from '../images/cross.png';
import HeaderIconCNT from '../containers/HeaderIconCNT'

function Header(props) {
  const listOfIcons = [['cup', cup], ['weather', weather], ['wrench', wrench]];

  for (let i = 0; i < listOfIcons.length; i++) {
    if (listOfIcons[i][0] === props.pageForTheSlideWindow) {
      listOfIcons[i] = ['cross', cross];
    }
  }

  const content = listOfIcons.map(item => (
    <HeaderIconCNT
      key={item[0]}
      image={item[1]}
      icon={`${item[0]}`}
    />)
  )

  return (
    <div className="header">
      {content}
    </div>
  )
}

export default Header;
