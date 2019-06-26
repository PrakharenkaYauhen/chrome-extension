import React from 'react';
// import PropTypes from 'prop-types';
import WeatherDayOfTheWeek from './WeatherDayOfTheWeek';

class Weather extends React.Component {
  componentDidMount() {
    this.props.fetchData();
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

    if (weatherObject[0].cod === "500") {
      return (
        <div className="weather">
          <p>{weatherObject[0].message}</p>
        </div>);
    }

    const currentDayWeatherData = weatherObject[0];
    const currentDay = new Date().getDay();
    const daysOfWeek = ['SUN', 'MON', 'TUES', 'WED', 'THURS', 'FRI', 'SAT'];
    let eachDayOfWeekWeather = [];
    for (let i = 0; i < 5; i++) {
      eachDayOfWeekWeather.push((
        <WeatherDayOfTheWeek
          key={i + currentDay < 7
            ? daysOfWeek[i + currentDay]
            : daysOfWeek[i + currentDay - 7]}
          dayName={i + currentDay < 7
            ? daysOfWeek[i + currentDay]
            : daysOfWeek[i + currentDay - 7]}
          degree={weatherObject[1].list[i * 8].main.temp}
          icon={weatherObject[1].list[i * 8].weather[0].icon}
        />)
      )
    }
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
    }
    const getTimeInString = (time) => {
      let stringOption = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      }
      return new Date(time).toLocaleString("en-US", stringOption)
    }

    return (
      <div className="weather">
        <div className="weather-image">
          <div className="weather-fog"></div>
          <div className="weather-fog-bottom"></div>
          <div className="weather-current-day">
            <div className={`weather-icon ${compareIcons[currentDayWeatherData.weather[0].icon]}`}></div>
            <p>{currentDayWeatherData.main.temp}<span>&deg;</span></p>
          </div>
          <div className="weather-adress">
            <h2>{`${currentDayWeatherData.name}, ${currentDayWeatherData.sys.country}`}</h2>
            <p>{currentDayWeatherData.weather[0].description.toUpperCase()} <span>{currentDayWeatherData.main.temp_max} HIGH/{currentDayWeatherData.main.temp_min} LOW</span> <span>{getTimeInString(new Date())} PST</span></p>
          </div>
          <div className="weather-parametres">
            <p>HUMIDITY <span>{`${currentDayWeatherData.main.humidity}%`}</span></p>
            <p>BAROMETER <span>{`${currentDayWeatherData.main.pressure}hPa [mm]`}</span></p>
            <p>WIND <span>{`${currentDayWeatherData.wind.speed}m/s`}</span></p>
            <p>SUNRISE <span>{getTimeInString(currentDayWeatherData.sys.sunrise)}</span></p>
            <p>SUNSET <span>{getTimeInString(currentDayWeatherData.sys.sunset)}</span></p>
          </div>

          <div className="weather-week">
            {eachDayOfWeekWeather}
          </div>
        </div>
      </div>
    )
  }
}

// ContentLink.propTypes = {
//   image: PropTypes.string.isRequired,
// };

export default Weather;
