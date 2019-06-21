// Container FootballCNT

import { connect } from 'react-redux';
import Football from '../components/Football';
import { actionFillJuventus } from '../actions';

const mapStateToProps = (state) => {
  const { 
    juventusObject,
    juventusIsLoaded,
    juventusError,
  } = state;

  return {
    juventusObject,
    juventusIsLoaded,
    juventusError,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: clubName => {

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
                console.log(result);
                let action = {
                  juventusObject: result,
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

    },
  }
}

const FootballCNT = connect(mapStateToProps, mapDispatchToProps)(Football);

export default FootballCNT;
