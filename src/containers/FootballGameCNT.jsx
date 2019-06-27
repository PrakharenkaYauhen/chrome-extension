import { connect } from 'react-redux';
import FootballGame from '../components/FootballGame';

const mapStateToProps = (state, props) => {
  const {
    juventusObject,
  } = state;

  const {
    nextGame,
    numberOfObject,
    gameNumber,
  } = props;

  const nextGamesObject = juventusObject[1].events;
  const previousGamesObject = juventusObject[2].results;
  const juventuslogo = juventusObject[0].teams[0].strTeamBadge;
  const gamesObject = nextGame ? nextGamesObject : previousGamesObject;

  return {
    juventusObject,
    gamesObject,
    juventuslogo,
    nextGame,
    numberOfObject,
    gameNumber,
  };
};

const FootballGameCNT = connect(mapStateToProps)(FootballGame);

export default FootballGameCNT;
