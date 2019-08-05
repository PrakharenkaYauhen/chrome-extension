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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onClick: () => {
//       let xhr = new XMLHttpRequest();

//       let json = JSON.stringify({
//         name: "Вася",
//         // surname: "Петров"
//         age: 30
//       });

//       xhr.open("POST", 'http://localhost:3001');
//       xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

//       xhr.send(json);

//       console.log('check');

//       // $.ajax({
//       //   url: "api/users",
//       //   contentType: "application/json",
//       //   method: "POST",
//       //   data: JSON.stringify({
//       //     name: userName,
//       //     age: userAge
//       //   }),
//       //   success: function (user) {
//       //     reset();
//       //     $("table tbody").append(row(user));
//       //   }
//       // })
//     }
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    onEnterClick: () => {
      let xhr = new XMLHttpRequest();

      let user = {
        name: "Vasya",
        email: "Prorok04@yandex.ru",
        password: "11111"
      }

      xhr.open("GET", 'http://localhost:3002/current' + `?${sessionStorage.getItem(user.name + 'auth')}`);
      xhr.send();

      xhr.onload = function(res) {
        let object = JSON.parse(res.target.response)
        console.log(object);
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

      xhr.onload = function(res) {
        let token = JSON.parse(res.target.response).token;
        sessionStorage.setItem(user.name + 'auth', token);
      }

      console.log('check2');
    }
  };
};

const AuthenticationWindowCNT = connect(mapStateToProps, mapDispatchToProps)(AuthenticationWindow);

export default AuthenticationWindowCNT;
