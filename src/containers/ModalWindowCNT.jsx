/* global chrome */

import { connect } from 'react-redux'
import ModalWindow from '../components/ModalWindow'
import { actionModalWindow } from '../actions';
import { actionFormNewLink } from '../actions';
import { actionAddNewLink } from '../actions';

const mapStateToProps = (state) => {
  console.log(state);
  const {
    linksArray,
    modalWindowVision,
    newLink,
  } = state;

  return {
    linksArray,
    modalWindowVision,
    newLink,
  }
}

let tabNameInputValue;
let tabAdressInputValue;
let tabPictureInputValue;

const mapDispatchToProps = (dispatch) => {
  return {
    onClickExit: () => {
      let action = {
        modalWindowVision: false,
        newLink: [],
      }
      dispatch(actionModalWindow(action))
    },

    onChange: e => {
      if (e.target.name === "tabName") {
        tabNameInputValue = e.target.value;
      } else if (e.target.name === "tabAdress") {
        tabAdressInputValue = e.target.value;
      } else if (e.target.name === "tabPicture") {
        tabPictureInputValue = e.target.value;
      }

      let newLink = {
        image: tabPictureInputValue,
        text: tabNameInputValue,
        link: tabAdressInputValue
      };
      let action = {
        newLink: newLink,
      }
      dispatch(actionFormNewLink(action))
    },

    onClickAddLink: (linksArray, newLink) => {
      if (!newLink || !newLink.image || !newLink.text || !newLink.link) return;
      if (linksArray.length >= 11) {
        return;
      } else {
        linksArray.push(newLink);
        if (chrome.storage) {
          let linksObject = {};
          linksObject['linksArray'] = JSON.stringify(linksArray);
          
          chrome.storage.local.set(linksObject, result => {
            let action = {
              linksArray: linksObject,
              modalWindowVision: false,
              newLink: {},
            }
            dispatch(actionAddNewLink(action))
          })
        } else {
          localStorage.setItem('linksArray', JSON.stringify(linksArray));
          let action = {
            modalWindowVision: false,
            newLink: {},
          }
          dispatch(actionAddNewLink(action))
        }
      }
    },
  }
}

const ModalWindowCNT = connect(mapStateToProps, mapDispatchToProps)(ModalWindow);

export default ModalWindowCNT;

// w3schools
// https://www.w3schools.com/
// https://lh3.googleusercontent.com/cfVIec33OkyKNyqyVa_PQzz8XWlRSvWE89LlpW85gXxlVmWV03DEkjZFol7rieuO9r2E