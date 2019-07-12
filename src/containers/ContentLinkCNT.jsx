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
  let currentDraggableID;

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
      const newLinksArray = linksArray.filter(item => item.text !== value);
      localStorageSets(newLinksArray);
      const action = {
        linksArray: newLinksArray,
      };
      dispatch(actionGetChromeLocalStorage(action));
    },

    dragItemStart: (e, id) => {
      currentDraggableID = id;
      e.dataTransfer.setData('text/plain', id);
      e.target.parentElement.style.opacity = 0.01;
    },

    dragItemOver: (e) => {
      e.preventDefault();
    },

    dragItemEnter: (e, id) => {
      if (currentDraggableID === id) return;
      const styledEl = e.currentTarget.parentElement.style;
      styledEl.transform = 'translate(5px, -5px)';
      styledEl.opacity = 0.7;
    },

    dragItemLeave: (e, id) => {
      if (currentDraggableID === id) return;
      const styledEl = e.currentTarget.parentElement.style;
      styledEl.transform = null;
      styledEl.opacity = 1;
    },

    dragItemEnd: (e) => {
      e.target.parentElement.style.opacity = 1;
    },

    dragItemDrop: (e, linksArray, id) => {
      const currElemID = id;
      const prevElemeID = e.dataTransfer.getData('text/plain');
      const styledEl = e.currentTarget.parentElement.style;
      if (prevElemeID < 0) return;
      styledEl.transform = null;
      styledEl.opacity = 1;
      [linksArray[currElemID], linksArray[prevElemeID]] = [linksArray[prevElemeID], linksArray[currElemID]];
      localStorageSets(linksArray);
      const action = {
        linksArray,
        linksArrayString: JSON.stringify(linksArray),
      };
      dispatch(actionGetChromeLocalStorage(action));
    },
  };
};

const ContentLinkCNT = connect(mapStateToProps, mapDispatchToProps)(ContentLink);

export default ContentLinkCNT;
