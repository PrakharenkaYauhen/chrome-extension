// Component Header

import React from 'react';
// import PropTypes from 'prop-types';
import cup from '../images/cup.png';
import weather from '../images/weather.png';
import wrench from '../images/wrench.png';
import HeaderIcon from './HeaderIcon'

function Header() {
  return (
    <div className="header">
      <HeaderIcon image={cup}/>
      <HeaderIcon image={weather}/>
      <HeaderIcon image={wrench}/>
    </div>
  )
}

export default Header;
