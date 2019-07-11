import { connect } from 'react-redux';
import ContentLink from '../components/ContentLink';
import { actionModalWindow, actionGetChromeLocalStorage } from '../actions';
import localStorageSets from '../helpers/localStorageSets';


const mapStateToProps = (state) => {
  const {
    linksArray,
  } = state;

  return {
    linksArray,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickOpenModal: (e) => {
      e.preventDefault();
      const action = {
        modalWindowVision: true,
      };
      dispatch(actionModalWindow(action));
    },

    deleteLink: (e, linksArray) => {
      const value = e.target.previousElementSibling.lastElementChild.textContent;
      const newLinksArray = linksArray.filter((item) => item.text !== value);
      localStorageSets(newLinksArray);
      const action = {
        linksArray: newLinksArray,
      };
      dispatch(actionGetChromeLocalStorage(action));
    },

    dragItemStart: e => {
      let target = e.target;
      // if(target.getAttribute('id') === null) return;
      console.log(target.getAttribute('id'));
      e.dataTransfer.setData("text/plain", target.getAttribute('id'));
      // console.log(e.dataTransfer.getData("text/plain"));
      target.parentElement.style.opacity = .01;
    },

    dragItemOver: e => {
      e.preventDefault();
    },

    dragItemEnter: e => {
      e.currentTarget.parentElement.style.transform = 'translate(0, -35px)';
      console.log(e.screenY);
    },

    dragItemLeave: e => {
      e.currentTarget.parentElement.style.transform = null;
      console.log(e.screenY);
    },

    dragItemEnd: e => {
      e.target.parentElement.style.opacity = 1;
    },

    dragItemDrop: (e, linksArray) => {
      let currentElementID = e.currentTarget.getAttribute('id');
      let previousElementID = e.dataTransfer.getData("text/plain");
      if (previousElementID < 0) return;
      let el = document.getElementById(previousElementID);
      el.parentElement.style.opacity = 1;
      let previousElement = linksArray.splice(previousElementID, 1)[0];
      linksArray.splice(currentElementID, 0, previousElement);
      localStorageSets(linksArray);
      const action = {
        linksArray: linksArray,
        linksArrayString: JSON.stringify(linksArray),
      };
      dispatch(actionGetChromeLocalStorage(action));
    },
  };
};

const ContentLinkCNT = connect(mapStateToProps, mapDispatchToProps)(ContentLink);

export default ContentLinkCNT;
