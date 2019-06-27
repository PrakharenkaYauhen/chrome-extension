import React from 'react';
import PropTypes from 'prop-types';
import FootballGameCNT from '../containers/FootballGameCNT';

class Football extends React.Component {
  componentDidMount() {
    const {
      fetchData,
      fetchLogo,
    } = this.props;
    fetchData(fetchLogo);
  }

  render() {
    const {
      juventusIsLoaded,
      juventusError,
    } = this.props;

    const numberOfGames = Array.from(new Array(3), (x, i) => i);
    const nextGamesArray = numberOfGames.map(item => (
      <FootballGameCNT nextGame numberOfObject={4} key={item} gameNumber={item} />
    ));
    const lastGamesArray = numberOfGames.map(item => (
      <FootballGameCNT numberOfObject={3} key={item} gameNumber={item} />
    ));

    if (juventusError) {
      return (
        <div className="football">
          <h1>Juventus&apos;s games.</h1>
          <p>{`Error: ${juventusError.message}`}</p>
        </div>
      );
    }

    if (!juventusIsLoaded) {
      return (
        <div className="football">
          <h1>Juventus&apos;s games.</h1>
          <p>Loading...</p>
        </div>
      );
    }

    return (
      <div className="football">
        <h1>Juventus&apos;s games.</h1>
        <div className="next-games">
          <h2>NEXT GAMES</h2>
          {nextGamesArray}
        </div>
        <div className="last-games">
          <h2>LAST GAMES</h2>
          {lastGamesArray}
        </div>
      </div>
    );
  }
}

Football.defaultProps = {
  juventusError: null,
  juventusIsLoaded: false,
};

Football.propTypes = {
  fetchData: PropTypes.func.isRequired,
  fetchLogo: PropTypes.func.isRequired,
  juventusIsLoaded: PropTypes.bool,
  juventusError: PropTypes.instanceOf(Object),
};

export default Football;
