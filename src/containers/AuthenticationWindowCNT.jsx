import { connect } from 'react-redux';
import AuthenticationWindow from '../components/AuthenticationWindow';
import {
  actionAuthStatus,
  actionLogging,
} from '../actions';
import siteExpiry from '../helpers/siteExpiry';

const mapStateToProps = (state) => {
  const {
    authStatus,
    enterLog,
    newLog,
  } = state;

  return {
    authStatus,
    enterLog,
    newLog,
  };
};

let enterName;
let enterPassword;
let logName;
let logEmail;
let logPassword;

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e) => {
      if (e.target.name === 'enterName') {
        enterName = e.target.value;
      } else if (e.target.name === 'enterPassword') {
        enterPassword = e.target.value;
      } else if (e.target.name === 'logName') {
        logName = e.target.value;
      } else if (e.target.name === 'logEmail') {
        logEmail = e.target.value;
      } else if (e.target.name === 'logPassword') {
        logPassword = e.target.value;
      }

      const enterLog = {
        enterName,
        enterPassword,
      };
      const newLog = {
        logName,
        logEmail,
        logPassword,
      };
      const action = {
        enterLog,
        newLog,
      };
      dispatch(actionLogging(action));
    },

    onEnterClick: enterLog => {
      console.log(enterLog);
      const user = {
        name: enterLog.enterName,
        password: enterLog.enterPassword,
      }
      const token = sessionStorage.getItem(user.name + 'auth');
      const requestString = (token, name, password) => {
        return `http://localhost:3002/log?token=${token}&name=${name}&password=${password}`
      }

      const xhr = new XMLHttpRequest();
      xhr.open("GET", requestString(token, user.name, user.password));
      xhr.send();

      xhr.onload = function (res) {
        if (xhr.status !== 200) {
          const action = {
            authStatus: xhr.response,
            authWindowVision: false,
          };
          dispatch(actionAuthStatus(action));
        } else {
          if (token) {
            const object = JSON.parse(res.target.response)
            console.log(object);
          } else {
            const token = res.target.response;
            sessionStorage.setItem(user.name + 'auth', token);

            const xhr = new XMLHttpRequest();
            xhr.open("GET", requestString(token, user.name, user.password));
            xhr.send();

            xhr.onload = function (res) {
              console.log(res);
              const object = JSON.parse(res.target.response)
              console.log(object);
            }
          }

          sessionStorage.setItem('auth-allow', true);
          const action = {
            authStatus: "You've logged in",
            authWindowVision: true,
          };
          dispatch(actionAuthStatus(action));

          siteExpiry(user.name, dispatch, actionAuthStatus);
        }
      }
    },

    onCreateClick: newLog => {
      console.log(newLog);
      const user = {
        name: newLog.logName,
        email: newLog.logEmail,
        password: newLog.logPassword,
      }
      const xhr = new XMLHttpRequest();
      console.log(user);

      xhr.open("POST", 'http://localhost:3002');
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

      const json = JSON.stringify(user);
      console.log(json);
      xhr.send(json);

      xhr.onload = function (res) {
        console.log(res);
        if (xhr.status !== 200) {
          const action = {
            authStatus: xhr.response,
            authWindowVision: false,
          };
          dispatch(actionAuthStatus(action));
        } else {
          const token = JSON.parse(res.target.response).token;
          sessionStorage.setItem(user.name + 'auth', token);

          const action = {
            authStatus: "You've passed the registration",
            authWindowVision: false,
          };
          dispatch(actionAuthStatus(action));
        }
      }
    }
  };
};

let getTocken = () => {
  sessionStorage.removeItem('key');
};

setInterval(getTocken, 10000);

const AuthenticationWindowCNT = connect(mapStateToProps, mapDispatchToProps)(AuthenticationWindow);

export default AuthenticationWindowCNT;
