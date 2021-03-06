import React from 'react';
import PropTypes from 'prop-types';
// import styles from '../styles/FootballGame.scss';
import '../styles/FootballGame.scss';

function FootballGame({
  juventusObject,
  gamesObject,
  juventuslogo,
  nextGame,
  numberOfObject,
  gameNumber,
}) {
  const juventusIdNumberInObjectAPI = '133676';
  const gameObject = gamesObject[gameNumber];
  const opposingTeamObject = juventusObject[numberOfObject][gameNumber].teams[0];

  function getDateString(dateOfTheGame, timeOfTheGame) {
    const stringOption = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(`${dateOfTheGame} ${timeOfTheGame}`).toLocaleString('en-US', stringOption);
  }

  function getTimeString(dateOfTheGame, timeOfTheGame) {
    const stringOption = {
      hour: 'numeric',
      minute: 'numeric',
    };
    return new Date(`${dateOfTheGame} ${timeOfTheGame}`).toLocaleString('en-US', stringOption);
  }

  return (
    <div className="game">
      <div>
        <img
          alt={
            gameObject.idHomeTeam === juventusIdNumberInObjectAPI
              ? 'juventus logo'
              : `${opposingTeamObject.strTeam} logo`
          }
          src={
            gameObject.idHomeTeam === juventusIdNumberInObjectAPI
              ? juventuslogo
              : opposingTeamObject.strTeamBadge
          }
        />
        <div>
          <p>{getDateString(gameObject.dateEvent, gameObject.strTime)}</p>
          <h3>
            {nextGame
              ? getTimeString(gameObject.dateEvent, gameObject.strTime)
              : `${gameObject.intHomeScore} : ${gameObject.intAwayScore}`
            }
          </h3>
        </div>
        <img
          alt={
            gameObject.idAwayTeam === juventusIdNumberInObjectAPI
              ? 'juventus logo'
              : `${opposingTeamObject.strTeam} logo`
          }
          src={
            gameObject.idAwayTeam === juventusIdNumberInObjectAPI
              ? juventuslogo
              : opposingTeamObject.strTeamBadge
          }
        />
      </div>
      <h3>{gameObject.strEvent.toUpperCase()}</h3>
    </div>
  );
}

FootballGame.defaultProps = {
  nextGame: null,
};

FootballGame.propTypes = {
  juventusObject: PropTypes.instanceOf(Object).isRequired,
  gamesObject: PropTypes.instanceOf(Object).isRequired,
  juventuslogo: PropTypes.string.isRequired,
  nextGame: PropTypes.bool,
  numberOfObject: PropTypes.number.isRequired,
  gameNumber: PropTypes.number.isRequired,
};

export default FootballGame;
