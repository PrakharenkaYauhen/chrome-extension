import { connect } from 'react-redux'
import FootballGame from '../components/FootballGame'

const mapStateToProps = (state, props) => {
  const {
    juventusObject,
  } = state;

  const nextGamesObject = juventusObject[1].events;
  const previousGamesObject = juventusObject[2].results;
  const juventuslogo = juventusObject[0].teams[0].strTeamBadge;

  const game = props.game;
  const gamesObject = game ? nextGamesObject : previousGamesObject;
  const numberOfObject = props.numberOfObject;
  const gameNumber = props.gameNumber;

  return {
    juventusObject,
    gamesObject,
    juventuslogo,
    game,
    numberOfObject,
    gameNumber,
  }
}

// const HeaderCNT = connect(mapStateToProps, mapDispatchToProps)(Header);
const FootballGameCNT = connect(mapStateToProps)(FootballGame);

export default FootballGameCNT;
