import { connect } from 'react-redux';
import Weather from '../components/Weather';
import { actionFillWeather } from '../actions';

const mapStateToProps = (state) => {
  const {
    weatherObject,
    weatherIsLoaded,
    weatherError,
  } = state;

  return {
    weatherObject,
    weatherIsLoaded,
    weatherError,
  };
};

const locationPromise = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition((position) => {
    if (position) {
      resolve(position.coords);
    } else {
      reject(new Error('Weather dates is not received'));
    }
  });
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => {
      locationPromise.then((coords) => {
        const city = (coords) ? 'lat=' + coords.latitude.toFixed(6) + '&lon='
          + coords.longitude.toFixed(6) : 'q=Minsk';
        return Promise.all([
          fetch('http://api.openweathermap.org/data/2.5/weather?' + city
            + '&units=metric&lang=en&APPID=2d009bc907c3f547b59f7129beb7c9ee'),
          fetch('http://api.openweathermap.org/data/2.5/forecast?' + city
            + '&units=metric&lang=en&APPID=2d009bc907c3f547b59f7129beb7c9ee'),
        ]);
      })
        .then(res => res.map(wetherObject => wetherObject.json()))
        .then((res) => {
          Promise.all(res)
            .then(
              (result) => {
                // console.log(result);
                const action = {
                  weatherObject: result,
                  weatherIsLoaded: true,
                  weatherError: null,
                };
                dispatch(actionFillWeather(action));
              },
              (error) => {
                // console.log(error);
                const action = {
                  weatherObject: null,
                  weatherIsLoaded: true,
                  weatherError: error,
                };
                dispatch(actionFillWeather(action));
              },
            );
        });
    },
  };
};

const WeatherCNT = connect(mapStateToProps, mapDispatchToProps)(Weather);

export default WeatherCNT;
