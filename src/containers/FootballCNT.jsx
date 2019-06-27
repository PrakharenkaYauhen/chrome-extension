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
      Promise.all([
        fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Juventus'),
        fetch('https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=133676'),
        fetch('https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=133676'),
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
      const eventsObject = result[1].events;
      const lastGamesObject = result[2].results;
      const juventusIdNumberInObjectAPI = '133676';

      Promise.all([
        fetch(`${requestString}${eventsObject[0].idAwayTeam === juventusIdNumberInObjectAPI
          ? eventsObject[0].idHomeTeam
          : eventsObject[0].idAwayTeam}`),
        fetch(`${requestString}${eventsObject[1].idAwayTeam === juventusIdNumberInObjectAPI
          ? eventsObject[1].idHomeTeam
          : eventsObject[1].idAwayTeam}`),
        fetch(`${requestString}${eventsObject[2].idAwayTeam === juventusIdNumberInObjectAPI
          ? eventsObject[2].idHomeTeam
          : eventsObject[2].idAwayTeam}`),
        fetch(`${requestString}${lastGamesObject[0].idAwayTeam === juventusIdNumberInObjectAPI
          ? lastGamesObject[0].idHomeTeam
          : lastGamesObject[0].idAwayTeam}`),
        fetch(`${requestString}${lastGamesObject[1].idAwayTeam === juventusIdNumberInObjectAPI
          ? lastGamesObject[1].idHomeTeam
          : lastGamesObject[1].idAwayTeam}`),
        fetch(`${requestString}${lastGamesObject[2].idAwayTeam === juventusIdNumberInObjectAPI
          ? lastGamesObject[2].idHomeTeam
          : lastGamesObject[2].idAwayTeam}`),
      ])
        .then(res => res.map(juventusObject => juventusObject.json()))
        .then((res) => {
          Promise.all(res)
            .then(
              (resulttt) => {
                const nextOpponent = resulttt.splice(0, 3);
                const action = {
                  juventusObject: [...result, resulttt, nextOpponent],
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
