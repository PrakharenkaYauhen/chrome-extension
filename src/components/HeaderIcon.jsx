import React from 'react';
import PropTypes from 'prop-types';
// import styles from '../styles/HeaderIcon.scss';
import '../styles/HeaderIcon.scss';

function HeaderIcon({
  image,
  icon,
  toggleCustomization,
  toggleIcons,
  iconsActions,
}) {
  return (
    <button
      className="header-icon"
      type="button"
      onClick={
        icon === 'wrench'
          ? toggleCustomization
          : () => toggleIcons(iconsActions, icon)
      }
    >
      <img
        src={image}
        alt={image}
      />
    </button>
  );
}

HeaderIcon.propTypes = {
  image: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  toggleCustomization: PropTypes.func.isRequired,
  toggleIcons: PropTypes.func.isRequired,
  iconsActions: PropTypes.bool.isRequired,
};

export default HeaderIcon;
