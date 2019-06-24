// Container FootballCNT

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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (fetchLogo) => {

      Promise.all([
        fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Juventus'),
        fetch('https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=133676'),
        fetch('https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=133676'),
      ])
        .then(res => {
          // console.log(res);
          return res.map(juventusObject => juventusObject.json())
        })
        .then(res => {
          // console.log(res);
          Promise.all(res)
            .then(
              (result) => {
                // console.log(result);
                // let action = {
                //   juventusObject: result,
                //   juventusIsLoaded: true,
                //   juventusError: null,
                // }
                // dispatch(actionFillJuventus(action))
                fetchLogo(result);
              },
              (error) => {
                console.log(error);
                let action = {
                  juventusObject: null,
                  juventusIsLoaded: true,
                  juventusError: error,
                }
                dispatch(actionFillJuventus(action))
              }
            )
        })

    },

    // fetchLogo: team => {
    //   fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${team}`)
    //   .then(res => res.json())
    //   .then(result => result.teams[0].strTeamBadge);
    // }

    fetchLogo: result => {
      let requestString = 'https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id='
      Promise.all([
        fetch(`${requestString}${result[1].events[0].idAwayTeam === '133676' ? result[1].events[0].idHomeTeam : result[1].events[0].idAwayTeam}`),
        fetch(`${requestString}${result[1].events[1].idAwayTeam === '133676' ? result[1].events[1].idHomeTeam : result[1].events[1].idAwayTeam}`),
        fetch(`${requestString}${result[1].events[2].idAwayTeam === '133676' ? result[1].events[2].idHomeTeam : result[1].events[2].idAwayTeam}`),
        fetch(`${requestString}${result[2].results[0].idAwayTeam === '133676' ? result[2].results[0].idHomeTeam : result[2].results[0].idAwayTeam}`),
        fetch(`${requestString}${result[2].results[1].idAwayTeam === '133676' ? result[2].results[1].idHomeTeam : result[2].results[1].idAwayTeam}`),
        fetch(`${requestString}${result[2].results[2].idAwayTeam === '133676' ? result[2].results[2].idHomeTeam : result[2].results[2].idAwayTeam}`),
      ])
        .then(res => res.map(juventusObject => juventusObject.json()))
        .then(res => {
          Promise.all(res)
            .then(
              (resulttt) => {
                // console.log(resulttt);
                let nextOpponent = resulttt.splice(0, 3);
                // result.
                let action = {
                  // juventusObject: result.concat(resulttt, nextOpponent),
                  juventusObject: [...result,resulttt,nextOpponent],
                  juventusIsLoaded: true,
                  juventusError: null,
                }
                dispatch(actionFillJuventus(action))
              },
              (error) => {
                console.log(error);
                let action = {
                  juventusObject: null,
                  juventusIsLoaded: true,
                  juventusError: error,
                }
                dispatch(actionFillJuventus(action))
              }
            )
        })
    }
  }
}

const FootballCNT = connect(mapStateToProps, mapDispatchToProps)(Football);

export default FootballCNT;
