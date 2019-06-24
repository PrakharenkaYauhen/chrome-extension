import React from 'react';
// import PropTypes from 'prop-types';

function FootballGame({ 
  juventusObject, 
  gamesObject, 
  juventuslogo, 
  game, 
  numberOfObject, 
  gameNumber }) {

  function getCorrectDate(dateOfTheGame, timeOfTheGame) {
    let timeOfTheDate = Date.parse(dateOfTheGame);
    let hours = timeOfTheGame.split(':')[0];
    let minutes = timeOfTheGame.split(':')[1];
    let addingMilliseconds = Date.parse(new Date(1970, 0, 1, hours, minutes));

    return timeOfTheDate + addingMilliseconds;
  }

  function getDateString(dateOfTheGame, timeOfTheGame) {

    let exactTime = getCorrectDate(dateOfTheGame, timeOfTheGame);
    let stringOption = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    return new Date(exactTime).toLocaleString("en-US", stringOption)
  }

  function getTimeString(dateOfTheGame, timeOfTheGame) {

    let exactTime = getCorrectDate(dateOfTheGame, timeOfTheGame);
    let stringOption = {
      hour: 'numeric',
      minute: 'numeric',
    }
    return new Date(exactTime).toLocaleString("en-US", stringOption)
  }

  return (
    <div className="game">
      <div>
        <img
          alt={gamesObject[gameNumber].idHomeTeam === '133676'
            ? 'juventus logo'
            : `${juventusObject[numberOfObject][gameNumber].teams[0].strTeam} logo`}
          src={gamesObject[gameNumber].idHomeTeam === '133676'
            ? juventuslogo
            : juventusObject[numberOfObject][gameNumber].teams[0].strTeamBadge}
        />
        <div>
          <p>{getDateString(gamesObject[gameNumber].dateEvent, gamesObject[gameNumber].strTime)}</p>
          <h3>{game
            ? getTimeString(gamesObject[gameNumber].dateEvent, gamesObject[gameNumber].strTime)
            : `${gamesObject[gameNumber].intHomeScore} : ${gamesObject[gameNumber].intAwayScore}`}</h3>
        </div>
        <img
          alt={gamesObject[gameNumber].idAwayTeam === '133676'
            ? 'juventus logo'
            : `${juventusObject[numberOfObject][gameNumber].teams[0].strTeam} logo`}
          src={gamesObject[gameNumber].idAwayTeam === '133676'
            ? juventuslogo
            : juventusObject[numberOfObject][gameNumber].teams[0].strTeamBadge}
        />
      </div>
      <h3>{gamesObject[gameNumber].strEvent.toUpperCase()}</h3>
    </div>
  )
}

// FootballGame.propTypes = {
//   image: PropTypes.string.isRequired,
// };

export default FootballGame;
