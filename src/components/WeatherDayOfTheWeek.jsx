import React from 'react';
import PropTypes from 'prop-types';
// import styles from '../styles/WeatherDayOfTheWeek.scss';
import '../styles/WeatherDayOfTheWeek.scss';


function WeatherDayOfTheWeek({
  dayName,
  icon,
  degree,
}) {
  const compareIcons = {
    '01d': 'sun',
    '02d': 'clear',
    '03d': 'cloudly',
    '04d': 'big-cloudly',
    '09d': 'rain',
    '10d': 'big-rain',
    '11d': 'lightning',
    '13d': 'snow',
    '50d': 'mist',
  };

  return (
    <div className="weather-one-day">
      <h4>{dayName}</h4>
      <div className={`weather-icon ${compareIcons[icon]}`} />
      <p>
        {degree}
        <span>&deg;</span>
      </p>
    </div>
  );
}

WeatherDayOfTheWeek.propTypes = {
  dayName: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  degree: PropTypes.number.isRequired,
};

export default WeatherDayOfTheWeek;
