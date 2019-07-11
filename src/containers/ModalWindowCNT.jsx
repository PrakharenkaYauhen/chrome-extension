import { connect } from 'react-redux';
import ModalWindow from '../components/ModalWindow';
import { actionModalWindow, actionFormNewLink, actionAddNewLink } from '../actions';
import localStorageSets from '../helpers/localStorageSets';

const mapStateToProps = (state) => {
  // console.log(state);
  const {
    linksArray,
    modalWindowVision,
    newLink,
  } = state;

  return {
    linksArray,
    modalWindowVision,
    newLink,
  };
};

let tabNameInputValue;
let tabAdressInputValue;
let tabPictureInputValue;

const mapDispatchToProps = (dispatch) => {
  return {
    onClickExit: () => {
      const action = {
        modalWindowVision: false,
        newLink: [],
      };
      dispatch(actionModalWindow(action));
    },

    onChange: (e) => {
      if (e.target.name === 'tabName') {
        tabNameInputValue = e.target.value;
      } else if (e.target.name === 'tabAdress') {
        tabAdressInputValue = e.target.value;
      } else if (e.target.name === 'tabPicture') {
        tabPictureInputValue = e.target.value;
      }

      const newLink = {
        image: tabPictureInputValue,
        text: tabNameInputValue,
        link: tabAdressInputValue,
      };
      const action = {
        newLink,
      };
      dispatch(actionFormNewLink(action));
    },

    onClickAddLink: (linksArray, newLink) => {
      if (!newLink || !newLink.image || !newLink.text || !newLink.link) return;
      if (linksArray.some(item => (item.text === newLink.text) || (item.link === newLink.link))) return;
      linksArray.push(newLink);
      if (linksArray.length >= 12) {
        linksArray.shift();
      }
      localStorageSets(linksArray, dispatch);
      const action = {
        linksArray: linksArray,
        linksArrayString: JSON.stringify(linksArray),
        modalWindowVision: false,
        newLink: {},
      };
      dispatch(actionAddNewLink(action));
    },
  };
};

const ModalWindowCNT = connect(mapStateToProps, mapDispatchToProps)(ModalWindow);

export default ModalWindowCNT;
