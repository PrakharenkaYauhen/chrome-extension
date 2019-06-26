import React from 'react';
// import PropTypes from 'prop-types';
import FootballCNT from '../containers/FootballCNT';
import WeatherCNT from '../containers/WeatherCNT';

let previousContent;

function SlidingWindowForIcons(props) {
  const {
    iconsActions,
    pageForTheSlideWindow,
  } = props;

  let content;

  if(pageForTheSlideWindow === "cup") {
    content = <FootballCNT />;
  } else if (pageForTheSlideWindow === "weather") {
    content = <WeatherCNT />;
  } else if (pageForTheSlideWindow === "cross") {
    content = previousContent;
  }

  previousContent = content;

  return (
    <div className={!iconsActions ? "sliding-window" : "sliding-window sliding-window-hide"}>
    {/* <div className="sliding-window sliding-window-hide"> */}
      {content}
    </div>
  )
}

// ContentLink.propTypes = {
//   image: PropTypes.string.isRequired,
// };

export default SlidingWindowForIcons;
