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
      <HeaderIconCNT image={cup}/>
      <HeaderIconCNT image={weather}/>
      <HeaderIconCNT image={wrench} wrench={true}/>
    </div>
  )
}

export default Header;
