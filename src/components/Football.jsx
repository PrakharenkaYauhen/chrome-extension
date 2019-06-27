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
          <FootballGameCNT game="nextGame" numberOfObject={4} gameNumber={0} />
          <FootballGameCNT game="nextGame" numberOfObject={4} gameNumber={1} />
          <FootballGameCNT game="nextGame" numberOfObject={4} gameNumber={2} />
        </div>
        <div className="last-games">
          <h2>LAST GAMES</h2>
          <FootballGameCNT numberOfObject={3} gameNumber={0} />
          <FootballGameCNT numberOfObject={3} gameNumber={1} />
          <FootballGameCNT numberOfObject={3} gameNumber={2} />
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
