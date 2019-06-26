// Component HeaderIcon

import React from 'react';
import PropTypes from 'prop-types';

function HeaderIcon(props) {
  return (
    <img
      src={props.image}
      alt={props.image}
      onClick={props.icon === "wrench"
        ? props.toggleCustomization
        : () => props.toggleIcons(props.iconsActions, props.icon, props.pageForTheSlideWindow)}
    />
  )
}

HeaderIcon.propTypes = {
  image: PropTypes.string.isRequired,
};

export default HeaderIcon;
