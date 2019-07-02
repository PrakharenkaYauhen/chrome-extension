import React from 'react';
import PropTypes from 'prop-types';
// import styles from '../styles/HeaderIcon.scss';
import '../styles/HeaderIcon.scss';

function HeaderIcon({
  image,
  icon,
  toggleCustomization,
  toggleIcons,
  sliderWindowVision,
}) {
  return (
    <button
      className="header-icon"
      type="button"
      onClick={
        icon === 'wrench'
          ? toggleCustomization
          : () => toggleIcons(sliderWindowVision, icon)
      }
    >
      <img
        src={image}
        alt={icon}
      />
    </button>
  );
}

HeaderIcon.propTypes = {
  image: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  toggleCustomization: PropTypes.func.isRequired,
  toggleIcons: PropTypes.func.isRequired,
  sliderWindowVision: PropTypes.bool.isRequired,
};

export default HeaderIcon;
