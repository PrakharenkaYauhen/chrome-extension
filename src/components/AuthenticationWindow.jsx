import React from 'react';
// import PropTypes from 'prop-types';
// import styles from '../styles/ModalWindow.scss';
// import '../styles/ModalWindow.scss';

function AuthenticationWindow({
  authStatus,
  enterLog,
  newLog,
  onEnterClick,
  onCreateClick,
  onChange,
}) {

  return (
    <div className="modal__cover">
      <div className="modal-enter">
        <h2>Authentication</h2>
        <div>
          <label htmlFor="enterName">Name:</label>
          <input
            type="text"
            name="enterName"
            id="enterName"
            tabIndex="41"
            onChange={onChange}
          // autoFocus
          // ref={tabNameInput}
          />
        </div>
        <div>
          <label htmlFor="enterPassword">Password:</label>
          <input
            type="text"
            name="enterPassword"
            id="enterPassword"
            tabIndex="42"
            onChange={onChange}
          />
        </div>

        <button
          tabIndex="43"
          type="button"
          className="modal__button_enter"
          onClick={() => onEnterClick(enterLog)}
        >
          {'Log in'}
        </button>

        <div>
          <label htmlFor="logName">Name:</label>
          <input
            type="text"
            name="logName"
            id="logName"
            tabIndex="44"
            onChange={onChange}
          // autoFocus
          // ref={tabNameInput}
          />
        </div>
        <div>
          <label htmlFor="logEmail">E-mail:</label>
          <input
            type="text"
            name="logEmail"
            id="logEmail"
            tabIndex="45"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="logPassword">Password:</label>
          <input
            type="email"
            name="logPassword"
            id="logPassword"
            tabIndex="46"
            onChange={onChange}
          />
        </div>

        <button
          tabIndex="46"
          type="button"
          className="modal__button_enter"
          onClick={() => onCreateClick(newLog)}
        >
          {'Create account'}
        </button>
        <p>{authStatus}</p>
      </div>
    </div>
  );
}

// ModalWindow.propTypes = {
//   linksArray: PropTypes.instanceOf(Array).isRequired,
//   modalWindowVision: PropTypes.bool,
//   newLink: PropTypes.instanceOf(Object).isRequired,
//   onClickExit: PropTypes.func.isRequired,
//   onChange: PropTypes.func.isRequired,
//   onClickAddLink: PropTypes.func.isRequired,
// };

export default AuthenticationWindow;
