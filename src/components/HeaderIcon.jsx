// Component HeaderIcon

import React from 'react';
import PropTypes from 'prop-types';

function HeaderIcon(props) {
  // console.log(props);
  return (
    <img
      src={props.image}
      alt={props.image}
      onClick={props.icon === "wrench"
        ? props.toggleCustomization
        : () => props.toggleIcons(props.iconsActions)}
    />
  )
}

HeaderIcon.propTypes = {
  image: PropTypes.string.isRequired,
};

export default HeaderIcon;
