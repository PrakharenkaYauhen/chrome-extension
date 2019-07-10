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
  };
};

const ContentLinkCNT = connect(mapStateToProps, mapDispatchToProps)(ContentLink);

export default ContentLinkCNT;
