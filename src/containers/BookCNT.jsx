import { connect } from 'react-redux';
import Book from '../components/Book';

// const mapStateToProps = (state) => {
//   const {
//     // sliderWindowVision,
//     // pageForTheSlideWindow,
//   } = state;

//   return {
//     // sliderWindowVision,
//     // pageForTheSlideWindow,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: e => {
      console.log(e);
      console.log(document.getElementsByTagName('object')[0]);
    },
  };
};

const BookCNT = connect(null, mapDispatchToProps)(Book);

export default BookCNT;
