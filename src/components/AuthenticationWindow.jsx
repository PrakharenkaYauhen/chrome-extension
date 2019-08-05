import React from 'react';
// import PropTypes from 'prop-types';
// import styles from '../styles/ModalWindow.scss';
// import '../styles/ModalWindow.scss';

function AuthenticationWindow({
  // linksArray,
  // modalWindowVision,
  // newLink,
  onClick,
  onEnterClick,
  onCreateClick,
  // onChange,
  // onClickAddLink,
}) {

  return (
    <div className="modal__cover">
      <div className="modal-enter">
        <h2>Authentication</h2>
        <div>
          <label htmlFor="tabName">Name:</label>
          <input
            type="text"
            name="tabName"
            id="tabName"
            tabIndex="41"
          // onChange={onChange}
          // autoFocus
          // ref={tabNameInput}
          />
        </div>
        <div>
          <label htmlFor="tabAdress">Password:</label>
          <input
            type="text"
            name="tabAdress"
            id="tabAdress"
            tabIndex="42"
          // onChange={onChange}
          />
        </div>

        <button
          tabIndex="43"
          type="button"
          className="modal__button_enter"
          onClick={() => onEnterClick()}
        >
          {'Log in'}
        </button>

        <div>
          <label htmlFor="tabName">Name:</label>
          <input
            type="text"
            name="tabName"
            id="tabName"
            tabIndex="44"
          // onChange={onChange}
          // autoFocus
          // ref={tabNameInput}
          />
        </div>
        <div>
          <label htmlFor="tabAdress">E-mail:</label>
          <input
            type="text"
            name="tabAdress"
            id="tabAdress"
            tabIndex="45"
          // onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="tabAdress">Password:</label>
          <input
            type="text"
            name="tabAdress"
            id="tabAdress"
            tabIndex="46"
          // onChange={onChange}
          />
        </div>

        <button
          tabIndex="46"
          type="button"
          className="modal__button_enter"
          onClick={() => onCreateClick()}
        >
          {'Create account'}
        </button>
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
