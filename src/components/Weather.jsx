import React from 'react';
import PropTypes from 'prop-types';
import WeatherDayOfTheWeek from './WeatherDayOfTheWeek';
// import styles from '../styles/Weather.scss';
import '../styles/Weather.scss';

class Weather extends React.Component {
  componentDidMount() {
    const {
      fetchData,
    } = this.props;
    fetchData();
  }

  render() {
    console.log('%c%s', 'color: green', 'Weather');
    const {
      weatherError,
      weatherIsLoaded,
      weatherObject,
    } = this.props;

    if (weatherError) {
      return (
        <div className="weather">
          <p>{`Error: ${weatherError.message}`}</p>
        </div>);
    }

    if (!weatherIsLoaded) {
      return (
        <div className="weather">
          <p>Loading...</p>
        </div>);
    }

    if (weatherObject[0].cod === '500') {
      return (
        <div className="weather">
          <p>{weatherObject[0].message}</p>
        </div>);
    }

    const currentDayWeatherData = weatherObject[0];
    const forecastForFiveDaysWeatherData = weatherObject[1];
    const currentDay = new Date().getDay();
    const daysOfWeek = ['SUN', 'MON', 'TUES', 'WED', 'THURS', 'FRI', 'SAT'];
    const quantityDaysForForecast = Array.from(new Array(5), (x, i) => i);
    const arrayOfDaysForForecast = quantityDaysForForecast.map((item, i) => (
      <WeatherDayOfTheWeek
        key={i + currentDay < 7
          ? daysOfWeek[i + currentDay]
          : daysOfWeek[i + currentDay - 7]}
        dayName={i + currentDay < 7
          ? daysOfWeek[i + currentDay]
          : daysOfWeek[i + currentDay - 7]}
        degree={forecastForFiveDaysWeatherData.list[i * 8].main.temp}
        icon={forecastForFiveDaysWeatherData.list[i * 8].weather[0].icon}
      />));
    // '01d' is a number of default icon, comming from the Weather API
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
    const getTimeInString = (time) => {
      const stringOption = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      };
      return new Date(time).toLocaleString('en-US', stringOption);
    };

    return (
      <div className="weather">
        <div className="weather-image">
          <div className="weather-fog" />
          <div className="weather-fog-bottom" />
          <div className="weather-current-day">
            <div className={`weather-icon ${compareIcons[currentDayWeatherData.weather[0].icon]}`} />
            <p>
              {currentDayWeatherData.main.temp}
              <span>&deg;</span>
            </p>
          </div>
          <div className="weather-adress">
            <h2>{`${currentDayWeatherData.name}, ${currentDayWeatherData.sys.country}`}</h2>
            <p>
              {currentDayWeatherData.weather[0].description.toUpperCase()}
              <span>
                {` ${currentDayWeatherData.main.temp_max} HIGH/${currentDayWeatherData.main.temp_min} LOW `}
              </span>
              <span>{`${getTimeInString(new Date())} PST`}</span>
            </p>
          </div>
          <div className="weather-parametres">
            <p>
              {'HUMIDITY '}
              <span>{`${currentDayWeatherData.main.humidity}%`}</span>
            </p>
            <p>
              {'BAROMETER '}
              <span>{`${currentDayWeatherData.main.pressure}hPa [mm]`}</span>
            </p>
            <p>
              {'WIND '}
              <span>{`${currentDayWeatherData.wind.speed}m/s`}</span>
            </p>
            <p>
              {'SUNRISE '}
              <span>{getTimeInString(currentDayWeatherData.sys.sunrise)}</span>
            </p>
            <p>
              {'SUNSET '}
              <span>{getTimeInString(currentDayWeatherData.sys.sunset)}</span>
            </p>
          </div>

          <div className="weather-week">
            {arrayOfDaysForForecast}
          </div>
        </div>
      </div>
    );
  }
}

Weather.defaultProps = {
  weatherObject: [],
  weatherError: null,
};

Weather.propTypes = {
  fetchData: PropTypes.func.isRequired,
  weatherError: PropTypes.instanceOf(Object),
  weatherIsLoaded: PropTypes.bool.isRequired,
  weatherObject: PropTypes.instanceOf(Object),
};

export default Weather;
