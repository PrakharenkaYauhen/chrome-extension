import { connect } from 'react-redux';
import AuthenticationWindow from '../components/AuthenticationWindow';
import {
  actionAuthStatus,
  actionLogging,
} from '../actions';
// import localStorageSets from '../helpers/localStorageSets';

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

// let user = {
//   name: "Vasya",
//   email: "Prorok04@yandex.ru",
//   password: "11111"
// }

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
      let user = {
        name: enterLog.enterName,
        password: enterLog.enterPassword,
      }
      let token = sessionStorage.getItem(user.name + 'auth');
      let requestString = (token, name, password) => {
        return `http://localhost:3002/log?token=${token}&name=${name}&password=${password}`
      }

      let xhr = new XMLHttpRequest();
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
            let object = JSON.parse(res.target.response)
            console.log(object);
          } else {
            let token = res.target.response;
            sessionStorage.setItem(user.name + 'auth', token);

            let xhr = new XMLHttpRequest();
            xhr.open("GET", requestString(token, user.name, user.password));
            xhr.send();

            xhr.onload = function (res) {
              console.log(res);
              let object = JSON.parse(res.target.response)
              console.log(object);
            }
          }

          sessionStorage.setItem('auth-allow', true);
          const action = {
            authStatus: "You've logged in",
            authWindowVision: true,
          };
          dispatch(actionAuthStatus(action));
        }
      }
    },

    onCreateClick: newLog => {
      console.log(newLog);
      let user = {
        name: newLog.logName,
        email: newLog.logEmail,
        password: newLog.logPassword,
      }
      let xhr = new XMLHttpRequest();
      console.log(user);

      xhr.open("POST", 'http://localhost:3002');
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

      let json = JSON.stringify(user);
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
          let token = JSON.parse(res.target.response).token;
          sessionStorage.setItem(user.name + 'auth', token);

          const action = {
            authStatus: "You've passed the registration",
            authWindowVision: false,
          };
          dispatch(actionAuthStatus(action));
        }
      }
    }




    // onEnterClick: enterLog => {
    //   console.log(enterLog);
    //   let token = sessionStorage.getItem(user.name + 'auth');
    //   let requestString = (token, name, password) => {
    //     return `http://localhost:3002/log?token=${token}&name=${name}&password=${password}`
    //   }

    //   let xhr = new XMLHttpRequest();
    //   xhr.open("GET", requestString(token, user.name, user.password));
    //   xhr.send();

    //   xhr.onload = function (res) {
    //     if (xhr.status !== 200) {
    //       const action = {
    //         authStatus: xhr.response,
    //         authWindowVision: false,
    //       };
    //       dispatch(actionAuthStatus(action));
    //     } else {
    //       if (token) {
    //         let object = JSON.parse(res.target.response)
    //         console.log(object);
    //       } else {
    //         let token = res.target.response;
    //         sessionStorage.setItem(user.name + 'auth', token);

    //         let xhr = new XMLHttpRequest();
    //         xhr.open("GET", requestString(token, user.name, user.password));
    //         xhr.send();

    //         xhr.onload = function (res) {
    //           console.log(res);
    //           let object = JSON.parse(res.target.response)
    //           console.log(object);
    //         }
    //       }

    //       sessionStorage.setItem('auth-allow', true);
    //       const action = {
    //         authStatus: "You've logged in",
    //         authWindowVision: true,
    //       };
    //       dispatch(actionAuthStatus(action));
    //     }
    //   }
    // },



    // onCreateClick: newLog => {
    //   console.log(newLog);
    //   let xhr = new XMLHttpRequest();

    //   xhr.open("POST", 'http://localhost:3002');
    //   xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    //   let json = JSON.stringify(user);
    //   xhr.send(json);

    //   xhr.onload = function (res) {
    //     let token = JSON.parse(res.target.response).token;
    //     sessionStorage.setItem(user.name + 'auth', token);

    //     const action = {
    //       authStatus: "You've passed the registration",
    //       authWindowVision: false,
    //     };
    //     dispatch(actionAuthStatus(action));
    //   }
    // }
  };
};

const AuthenticationWindowCNT = connect(mapStateToProps, mapDispatchToProps)(AuthenticationWindow);

export default AuthenticationWindowCNT;
