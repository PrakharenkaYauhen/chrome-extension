// Component HeaderIcon

import React from 'react';
import PropTypes from 'prop-types';

function HeaderIcon(props) {
  return <img src={props.image} alt={props.image}/>
}

HeaderIcon.propTypes = {
  image: PropTypes.string.isRequired,
};

export default HeaderIcon;
