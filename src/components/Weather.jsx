import React from 'react';
// import PropTypes from 'prop-types';
// import FootballCNT from '../containers/FootballCNT';
// import WeatherCNT from '../containers/WeatherCNT';
// import surfing from '../images/surfing.jpg';

function Weather(props) {
  return (
    <div className="weather">
      <div className="weather-image">
        {/* <img src={surfing} alt="surfing"/> */}
      {/* </div> */}
      <div className="weather-fog"></div>
      <div className="weather-fog-bottom"></div>
      <div className="weather-current-day">
        <div className="weather-icon sun"></div>
        <p>86<span>&deg;</span></p>
      </div>
      <div className="weather-adress">
        <h2>NEWPORT BEACH, CA</h2>
        <p>SUNNY <span>86 HIGH/64 LOW</span> <span>5:35 P.M. PST</span></p>
      </div>

      <div className="weather-week">
        <div className="weather-one-day">
          <h4>SUN</h4>
          <div className="weather-icon sun"></div>
          <p>88<span>&deg;</span></p>
        </div>
        <div className="weather-one-day">
          <h4>SUN</h4>
          <div className="weather-icon sun"></div>
          <p>88<span>&deg;</span></p>
        </div>
        <div className="weather-one-day">
          <h4>SUN</h4>
          <div className="weather-icon sun"></div>
          <p>88<span>&deg;</span></p>
        </div>
        <div className="weather-one-day">
          <h4>SUN</h4>
          <div className="weather-icon sun"></div>
          <p>88<span>&deg;</span></p>
        </div>
        <div className="weather-one-day">
          <h4>SUN</h4>
          <div className="weather-icon sun"></div>
          <p>88<span>&deg;</span></p>
        </div>
        <div className="weather-one-day">
          <h4>SUN</h4>
          <div className="weather-icon sun"></div>
          <p>88<span>&deg;</span></p>
        </div>
        <div className="weather-one-day">
          <h4>SUN</h4>
          <div className="weather-icon sun"></div>
          <p>88<span>&deg;</span></p>
        </div>
      </div>
      </div>
    </div>
  )
}

// ContentLink.propTypes = {
//   image: PropTypes.string.isRequired,
// };

export default Weather;
