import { connect } from 'react-redux';
import Content from '../components/Content';
import { actionModalWindow } from '../actions';

const mapStateToProps = (state) => {
  console.log(state);
  const {
    linksArray,
    newLink,
  } = state;

  return {
    linksArray,
    newLink,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickOpenModal: () => {
      let action = {
        modalWindowVision: true,
      }
      dispatch(actionModalWindow(action))
    },
  }
}

const ContentCNT = connect(mapStateToProps, mapDispatchToProps)(Content);

export default ContentCNT;
