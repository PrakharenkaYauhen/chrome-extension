import React from 'react';
// import PropTypes from 'prop-types';
// import styles from '../styles/ModalWindow.scss';
// import '../styles/ModalWindow.scss';

function AuthenticationWindow({
  // linksArray,
  // modalWindowVision,
  // newLink,
  onClick
  // onChange,
  // onClickAddLink,
}) {

  return (
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
        tabIndex="44"
        type="button"
        className="modal__button_enter"
        onClick={() => onClick()}
      >
        {'Add'}
      </button>
      <button
        tabIndex="45"
        type="button"
        className="modal__button_exit"
        // onClick={onClickExit}
        // onKeyDown={e => handleClick(e)}
      >
        {'x'}
      </button>
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
