import { connect } from 'react-redux';
import AuthenticationWindow from '../components/AuthenticationWindow';
// import { actionModalWindow, actionFormNewLink, actionAddNewLink } from '../actions';
// import localStorageSets from '../helpers/localStorageSets';

const mapStateToProps = (state) => {
  // console.log(state);
  const {
    // linksArray,
    // modalWindowVision,
    // newLink,
  } = state;

  return {
    // linksArray,
    // modalWindowVision,
    // newLink,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEnterClick: () => {
      let xhr = new XMLHttpRequest();

      let user = {
        name: "Vasya",
        email: "Prorok04@yandex.ru",
        password: "11111"
      }

      xhr.open("GET", 'http://localhost:3002/current' +
        `?token=${sessionStorage.getItem(user.name + 'auth')}&name=${user.name}&password=${user.password}`);
      xhr.send();

      xhr.onload = function (res) {
        if (xhr.status !== 200) {
          let responseText = `status: ${xhr.status}, ${xhr.response}`;
          console.log(responseText)
        } else {
          let object = JSON.parse(res.target.response)
          console.log(object);
        }
      }

      console.log('check1');
    },

    onCreateClick: () => {
      let xhr = new XMLHttpRequest();

      let user = {
        name: "Vasya",
        email: "Prorok04@yandex.ru",
        password: "11111"
      }

      let json = JSON.stringify(user);

      xhr.open("POST", 'http://localhost:3002');
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

      xhr.send(json);

      xhr.onload = function (res) {
        let token = JSON.parse(res.target.response).token;
        sessionStorage.setItem(user.name + 'auth', token);
      }

      console.log('check2');
    }
  };
};

const AuthenticationWindowCNT = connect(mapStateToProps, mapDispatchToProps)(AuthenticationWindow);

export default AuthenticationWindowCNT;
