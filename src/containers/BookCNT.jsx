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

const BookCNT = connect()(Book);

export default BookCNT;
