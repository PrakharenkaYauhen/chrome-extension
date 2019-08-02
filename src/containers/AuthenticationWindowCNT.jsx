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
    onClick: () => {
      let xhr = new XMLHttpRequest();

      let json = JSON.stringify({
        name: "Вася",
        // surname: "Петров"
        age: 30
      });

      xhr.open("POST", 'http://localhost:3001/api/users');
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

      xhr.send(json);

      console.log('check');

      // $.ajax({
      //   url: "api/users",
      //   contentType: "application/json",
      //   method: "POST",
      //   data: JSON.stringify({
      //     name: userName,
      //     age: userAge
      //   }),
      //   success: function (user) {
      //     reset();
      //     $("table tbody").append(row(user));
      //   }
      // })
    }
  };
};

const AuthenticationWindowCNT = connect(mapStateToProps, mapDispatchToProps)(AuthenticationWindow);

export default AuthenticationWindowCNT;
