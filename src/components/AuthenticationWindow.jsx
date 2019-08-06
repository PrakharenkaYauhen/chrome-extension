import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import Fingerprint from '@material-ui/icons/Fingerprint';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ContactMail from '@material-ui/icons/ContactMail';
import { makeStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';
// import styles from '../styles/ModalWindow.scss';
import '../styles/AuthenticationWindow.scss';

function AuthenticationWindow({
  authStatus,
  enterLog,
  newLog,
  onEnterClick,
  onCreateClick,
  onChange,
}) {
  const tabNameInput = React.createRef();
  const keyButtonTabNumber = 9;

  function handleClick(e) {
    if (e.keyCode === keyButtonTabNumber) {
      e.preventDefault();
      tabNameInput.current.focus();
    }
  }

  const useStyles = makeStyles(theme => ({
    root: {
      color: theme.palette.text.primary,
    },
    icon: {
      margin: theme.spacing(0, 1),
      fontSize: 18,
      verticalAlign: 'top',
    },
  }));
  const classes = useStyles();

  return (
    <div className="modal__cover">
      <div className="modal-enter">
        <h2>Authentication</h2>
        <div>
          <label htmlFor="enterName">
            <AccountCircle className={classes.icon} />
            Name:
          </label>
          <input
            type="text"
            name="enterName"
            id="enterName"
            tabIndex="41"
            onChange={onChange}
            autoFocus
            ref={tabNameInput}
          />
        </div>
        <div>
          <label htmlFor="enterPassword">
            <Fingerprint className={classes.icon} />
            Password:
            </label>
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
          <label htmlFor="logName">
            <AccountCircle className={classes.icon} />
            Name:
          </label>
          <input
            type="text"
            name="logName"
            id="logName"
            tabIndex="44"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="logEmail">
            <ContactMail className={classes.icon} />
            E-mail:
            </label>
          <input
            type="text"
            name="logEmail"
            id="logEmail"
            tabIndex="45"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="logPassword">
            <Fingerprint className={classes.icon} />
            Password:
          </label>
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
          onKeyDown={e => handleClick(e)}
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
