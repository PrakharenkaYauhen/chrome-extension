import React from 'react';
import PropTypes from 'prop-types';
import FootballCNT from '../containers/FootballCNT';
import WeatherCNT from '../containers/WeatherCNT';
import TableOfVisitedSitesCNT from '../containers/TableOfVisitedSitesCNT';
// import styles from '../styles/SlidingWindowForIcons.scss';
import '../styles/SlidingWindowForIcons.scss';

let previousContent;

function SlidingWindowForIcons(props) {
  const {
    sliderWindowVision,
    pageForTheSlideWindow,
  } = props;

  let content;

  if (pageForTheSlideWindow === 'cup') {
    content = <FootballCNT />;
  } else if (pageForTheSlideWindow === 'weather') {
    content = <WeatherCNT />;
  } else if (pageForTheSlideWindow === 'magnifier') {
    content = <TableOfVisitedSitesCNT />;
  } else if (pageForTheSlideWindow === 'cross') {
    content = previousContent;
  }

  previousContent = content;

  return (
    <div className={!sliderWindowVision ? 'sliding-window' : 'sliding-window sliding-window-hide'}>
      {content}
    </div>
  );
}

SlidingWindowForIcons.defaultProps = {
  pageForTheSlideWindow: null,
};

SlidingWindowForIcons.propTypes = {
  sliderWindowVision: PropTypes.bool.isRequired,
  pageForTheSlideWindow: PropTypes.string,
};

export default SlidingWindowForIcons;
