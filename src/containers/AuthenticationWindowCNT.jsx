import { connect } from 'react-redux';
import AuthenticationWindow from '../components/AuthenticationWindow';
import { actionAuthStatus } from '../actions';
// import localStorageSets from '../helpers/localStorageSets';

const mapStateToProps = (state) => {
  const {
    authStatus,
  } = state;

  return {
    authStatus,
  };
};

let user = {
  name: "Vasya",
  email: "Prorok04@yandex.ru",
  password: "11111"
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEnterClick: () => {   
      let token = sessionStorage.getItem(user.name + 'auth');
      let reqString = `http://localhost:3002/log?token=${token}&name=${user.name}&password=${user.password}`
      
      let xhr = new XMLHttpRequest();

      xhr.open("GET", reqString);
      xhr.send();

      xhr.onload = function (res) {
        if (xhr.status !== 200) {
          const action = {
            authStatus: xhr.response,
          };
          dispatch(actionAuthStatus(action));
        } else {
          if (sessionStorage.getItem(user.name + 'auth')) {
            let object = JSON.parse(res.target.response)
            console.log(object);
          } else {
            let token = res.target.response;
            sessionStorage.setItem(user.name + 'auth', token);

            let xhr = new XMLHttpRequest();

            xhr.open("GET", 'http://localhost:3002/current' +
              `?token=${token}&name=${user.name}&password=${user.password}`);
            xhr.send();

            xhr.onload = function (res) {
              console.log(res);
              let object = JSON.parse(res.target.response)
              console.log(object);
            }
          }
          const action = {
            authStatus: "You've logged in",
          };
          dispatch(actionAuthStatus(action));
        }
      }
    },

    onCreateClick: () => {
      let xhr = new XMLHttpRequest();

      let json = JSON.stringify(user);

      xhr.open("POST", 'http://localhost:3002');
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

      xhr.send(json);

      xhr.onload = function (res) {
        let token = JSON.parse(res.target.response).token;
        sessionStorage.setItem(user.name + 'auth', token);
        console.log(token);

        const action = {
          authStatus: "You've passed the registration",
        };
        dispatch(actionAuthStatus(action));
      }
    }
  };
};

const AuthenticationWindowCNT = connect(mapStateToProps, mapDispatchToProps)(AuthenticationWindow);

export default AuthenticationWindowCNT;
