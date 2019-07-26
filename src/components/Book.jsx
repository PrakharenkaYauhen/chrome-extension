import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.scss';
import book from '../code-complete-2nd-edition.pdf';

function Book({ onClick }) {
  return (
    <div
      className="book"
      onClick={e => onClick(e)}
      style={{ overflow: 'auto' }}
    >
      <h1>Books</h1>
      <object
        type="application/pdf"
        data={book}
      >
        <p>Insert your error message here, if the PDF cannot be displayed.</p>
      </object>
    </div>
  );
}

Book.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Book;
