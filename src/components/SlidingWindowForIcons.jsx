import React from 'react';
// import PropTypes from 'prop-types';
// import FootballCNT from '../containers/FootballCNT';
import WeatherCNT from '../containers/WeatherCNT';

function SlidingWindowForIcons(props) {
  return (
    // <div className={!props.iconsActions ? "sliding-window" : "sliding-window sliding-window-hide"}>
    <div className="sliding-window sliding-window-hide">
      {/* <FootballCNT /> */}
      <WeatherCNT />
    </div>
  )
}

// ContentLink.propTypes = {
//   image: PropTypes.string.isRequired,
// };

export default SlidingWindowForIcons;
