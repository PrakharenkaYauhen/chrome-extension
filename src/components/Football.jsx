// Component Football

import React from 'react';
import PropTypes from 'prop-types';

class Football extends React.Component {
  componentDidMount() {
    const {
      fetchData,
    } = this.props;
    fetchData();
  }

  render() {
    const {
      juventusObject,
      juventusIsLoaded,
      juventusError,
    } = this.props;

    let exactTime;

    if (juventusObject) {
      let timeOfTheDate = Date.parse(juventusObject[2].results[4].dateEvent);

      let hours = juventusObject[2].results[4].strTime.split(':')[0];
      let minutes = juventusObject[2].results[4].strTime.split(':')[1];
      let addingMilliseconds = Date.parse(new Date(1970, 0, 1, hours, minutes));

      exactTime = timeOfTheDate + addingMilliseconds;

      console.log(timeOfTheDate)
      console.log(addingMilliseconds)
    }

    if (juventusError) {
      return (
        <div className="football">
          <h1>Juventus's games.</h1>
          <div className="last-games">
            <p>{`Error: ${juventusError.message}`}</p>
          </div>
        </div>
      )
    }

    if (!juventusIsLoaded) {
      return (
        <div className="football">
          <h1>Juventus's games.</h1>
          <div className="last-games">
            <p>Loading...</p>
          </div>
        </div>
      )
    }

    return (
      <div className="football">
        <h1>Juventus's games.</h1>
        <div className="last-games">
          <h2>LAST GAMES</h2>
          <div className="last-game">
            <div>
              <img
                // className="juventus__badge"
                // alt={`${teamNameHeader}'s badge`}
                src={juventusObject[0].teams[0].strTeamBadge}
              />
              <div>
                {/* <p>{new Date(Date.parse(juventusObject[2].results[4].dateEvent)).toLocaleString("en-US", {year: 'numeric',  month: 'long',  day: 'numeric'})}</p> */}
                <p>{new Date(exactTime).toLocaleString("en-US", {year: 'numeric',  month: 'long',  day: 'numeric'})}</p>
                <h3>{new Date(exactTime).toLocaleString("en-US", {hour: 'numeric',  minute: 'numeric',})}</h3>
              </div>
              <img
                // className="juventus__badge"
                // alt={`${teamNameHeader}'s badge`}
                src={juventusObject[0].teams[0].strTeamBadge}
              />
            </div>
            <h3>{juventusObject[2].results[4].strEvent.toUpperCase()}</h3>
          </div>
        </div>
        <div className="next-games">

        </div>
      </div>
    )
  }
}

// Football.propTypes = {
//   image: PropTypes.string.isRequired,
// };

export default Football;
