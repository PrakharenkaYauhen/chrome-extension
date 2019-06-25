import React from 'react';
// import PropTypes from 'prop-types';

function WeatherDayOfTheWeek(props) {
  let compareIcons = {
    '01d': 'sun',
    '02d': 'clear',
    '03d': 'cloudly',
    '04d': 'big-cloudly',
    '09d': 'rain',
    '10d': 'big-rain',
    '11d': 'lightning',
    '13d': 'snow',
    '50d': 'mist',
  }

  return (
    <div className="weather-one-day">
      <h4>{props.dayName}</h4>
      <div className={`weather-icon ${compareIcons[props.icon]}`}></div>
      <p>{props.degree}<span>&deg;</span></p>
    </div>
  )
}

// ContentLink.propTypes = {
//   image: PropTypes.string.isRequired,
// };

export default WeatherDayOfTheWeek;
