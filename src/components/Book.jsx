import React from 'react';
// import PropTypes from 'prop-types';
// import styles from '../styles/HeaderIcon.scss';
import book from '../code-complete-2nd-edition.pdf';

function Book({ onClick }) {
  return (
    <div
      className="book"
      onClick={e => onClick(e)}
      style={{ overflow: 'auto' }}
    >
      <h1>Books</h1>
      {/* <object ><embed src={book} onScroll={e => {
        console.log(e);
      }} onClick={e => {
        console.log(e);
      }}/></object> */}
      <object
        type="application/pdf"
        data={book}
        onScroll={e => {
          console.log(e);
        }}
        onClick={e => onClick(e)}
      >
        <p>Insert your error message here, if the PDF cannot be displayed.</p>
      </object>
    </div>
  );
}

// HeaderIcon.propTypes = {
//   image: PropTypes.string.isRequired,
//   icon: PropTypes.string.isRequired,
//   toggleCustomization: PropTypes.func.isRequired,
//   toggleIcons: PropTypes.func.isRequired,
//   sliderWindowVision: PropTypes.bool.isRequired,
// };

export default Book;
