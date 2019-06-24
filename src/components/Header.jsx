// Component Header

import React from 'react';
// import PropTypes from 'prop-types';
import cup from '../images/cup.png';
import weather from '../images/weather.png';
import wrench from '../images/wrench.png';
import HeaderIconCNT from '../containers/HeaderIconCNT'

function Header() {
  return (
    <div className="header">
      <HeaderIconCNT image={cup} icon="cup"/>
      <HeaderIconCNT image={weather} icon="weather"/>
      <HeaderIconCNT image={wrench} icon="wrench"/>
    </div>
  )
}

export default Header;
