// Component Content

import React from 'react';
import logo from '../images/Penguin_2.ico';
import plus from '../images/plus.png';
// import PropTypes from 'prop-types';
import ContentLink from './ContentLink'

function Content() {
  return (
    <div className="content">
      <div>
        <ContentLink image={logo}/>
        <ContentLink image={logo}/>
        <ContentLink image={logo}/>
        <ContentLink image={logo}/>
        <ContentLink image={logo}/>
        <ContentLink image={logo}/>
        <ContentLink image={logo}/>
        <ContentLink image={plus}/>
      </div>
    </div>
  )
}

export default Content;
