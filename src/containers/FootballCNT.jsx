import { connect } from 'react-redux';
import Football from '../components/Football';
import { actionFillJuventus } from '../actions';

const mapStateToProps = (state) => {
  const {
    iconsActions,
    juventusObject,
    juventusIsLoaded,
    juventusError,
  } = state;

  return {
    iconsActions,
    juventusObject,
    juventusIsLoaded,
    juventusError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (fetchLogo) => {
      const requestString = 'https://www.thesportsdb.com/api/v1/json/1/';
      Promise.all([
        fetch(`${requestString}searchteams.php?t=Juventus`),
        fetch(`${requestString}eventsnext.php?id=133676`),
        fetch(`${requestString}eventslast.php?id=133676`),
      ])
        .then(res => res.map(juventusObject => juventusObject.json()))
        .then((res) => {
          Promise.all(res)
            .then(
              (result) => {
                fetchLogo(result);
              },
            );
        });
    },

    fetchLogo: (result) => {
      const requestString = 'https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=';
      const newGamesObject = result[1].events;
      const lastGamesObject = result[2].results;
      const juventusIdNumberInObjectAPI = '133676';
      const setRequestString = (teamNumber, eventObject) => (
        `${requestString}${eventObject[teamNumber].idAwayTeam === juventusIdNumberInObjectAPI
          ? eventObject[teamNumber].idHomeTeam
          : eventObject[teamNumber].idAwayTeam}`
      );

      Promise.all([
        fetch(setRequestString(0, newGamesObject)),
        fetch(setRequestString(1, newGamesObject)),
        fetch(setRequestString(2, newGamesObject)),
        fetch(setRequestString(0, lastGamesObject)),
        fetch(setRequestString(1, lastGamesObject)),
        fetch(setRequestString(2, lastGamesObject)),
      ])
        .then(res => res.map(juventusObject => juventusObject.json()))
        .then((res) => {
          Promise.all(res)
            .then(
              (opponentsObjects) => {
                const nextOpponent = opponentsObjects.splice(0, 3);
                const action = {
                  juventusObject: [...result, opponentsObjects, nextOpponent],
                  juventusIsLoaded: true,
                  juventusError: null,
                };
                dispatch(actionFillJuventus(action));
              },
              (error) => {
                // console.log(error);
                const action = {
                  juventusObject: null,
                  juventusIsLoaded: true,
                  juventusError: error,
                };
                dispatch(actionFillJuventus(action));
              },
            );
        });
    },
  };
};

const FootballCNT = connect(mapStateToProps, mapDispatchToProps)(Football);

export default FootballCNT;
