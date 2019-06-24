// Component Football

import React from 'react';
// import PropTypes from 'prop-types';
import FootballGameCNT from '../containers/FootballGameCNT';

class Football extends React.Component {
  componentDidMount() {
    this.props.fetchData(this.props.fetchLogo);
  }

  render() {
    const {
      iconsActions,
      juventusObject,
      juventusIsLoaded,
      juventusError,
    } = this.props;

    // console.log(juventusObject);

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
      <div className={!iconsActions ? "football" : "football football-hide"}>
        <h1>Juventus's games.</h1>
        <div className="next-games">
          <h2>NEXT GAMES</h2>
          <FootballGameCNT game="nextGame" numberOfObject={4} gameNumber={0}/>
          <FootballGameCNT game="nextGame" numberOfObject={4} gameNumber={1}/>
          <FootballGameCNT game="nextGame" numberOfObject={4} gameNumber={2}/>
        </div>
        <div className="last-games">
          <h2>LAST GAMES</h2>
          <FootballGameCNT numberOfObject={3} gameNumber={0}/>
          <FootballGameCNT numberOfObject={3} gameNumber={1}/>
          <FootballGameCNT numberOfObject={3} gameNumber={2}/>
        </div>
      </div>
    )
  }

}

// Football.propTypes = {
//   image: PropTypes.string.isRequired,
// };

export default Football;
