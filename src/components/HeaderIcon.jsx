import React from 'react';
import PropTypes from 'prop-types';

function HeaderIcon({
  image,
  icon,
  toggleCustomization,
  toggleIcons,
  iconsActions,
  pageForTheSlideWindow,
}) {
  return (
    <button
      type="button"
      onClick={
        icon === 'wrench'
          ? toggleCustomization
          : () => toggleIcons(iconsActions, icon, pageForTheSlideWindow)
      }
    >
      <img
        src={image}
        alt={image}
      />
    </button>
  );
}

HeaderIcon.defaultProps = {
  pageForTheSlideWindow: null,
};

HeaderIcon.propTypes = {
  image: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  toggleCustomization: PropTypes.func.isRequired,
  toggleIcons: PropTypes.func.isRequired,
  iconsActions: PropTypes.bool.isRequired,
  pageForTheSlideWindow: PropTypes.string,
};

export default HeaderIcon;
