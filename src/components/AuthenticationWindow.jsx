import React from 'react';
import Fingerprint from '@material-ui/icons/Fingerprint';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ContactMail from '@material-ui/icons/ContactMail';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import PropTypes from 'prop-types';
// import styles from '../styles/ModalWindow.scss';
import '../styles/AuthenticationWindow.scss';

const useStyles = makeStyles(theme => ({
  root: {
    width: 'calc(100% - 150px)',

    '& input': {
      padding: theme.spacing(0.5, 1),
    },
  },
  icon: {
    margin: theme.spacing(0, 1),
    fontSize: 18,
    verticalAlign: 'top',
  },
  button: {
    margin: theme.spacing(1),
    fontSize: 12,
    padding: 2,
  },
}));

function AuthenticationWindow({
  authStatus,
  enterLog,
  newLog,
  onEnterClick,
  onCreateClick,
  onChange,
}) {
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
          <TextField
            classes={{
              root: classes.root,
              input: classes.textField,
            }}
            variant="outlined"
            type="text"
            name="enterName"
            id="enterName"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="enterPassword">
            <Fingerprint className={classes.icon} />
            Password:
            </label>
          <TextField
            classes={{
              root: classes.root,
              input: classes.textField,
            }}
            variant="outlined"
            type="password"
            name="enterPassword"
            id="enterPassword"
            onChange={onChange}
          />
        </div>

        <Button
          variant="contained"
          className={classes.button}
          type="button"
          onClick={() => onEnterClick(enterLog)}
        >
          {'Log in'}
        </Button>

        <div>
          <label htmlFor="logName">
            <AccountCircle className={classes.icon} />
            Name:
          </label>
          <TextField
            classes={{
              root: classes.root,
              input: classes.textField,
            }}
            variant="outlined"
            type="text"
            name="logName"
            id="logName"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="logEmail">
            <ContactMail className={classes.icon} />
            E-mail:
            </label>
          <TextField
            classes={{
              root: classes.root,
              input: classes.textField,
            }}
            variant="outlined"
            type="email"
            name="logEmail"
            id="logEmail"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="logPassword">
            <Fingerprint className={classes.icon} />
            Password:
          </label>
          <TextField
            classes={{
              root: classes.root,
              input: classes.textField,
            }}
            variant="outlined"
            type="password"
            name="logPassword"
            id="logPassword"
            onChange={onChange}
          />
        </div>

        <Button
          variant="contained"
          className={classes.button}
          type="button"
          onClick={() => onCreateClick(newLog)}
        >
          {'Create account'}
        </Button>

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
