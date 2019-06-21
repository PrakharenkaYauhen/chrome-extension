// Component ContentLink

import React from 'react';
import PropTypes from 'prop-types';

function ContentLink(props) {
  return (
    <a href="http://" className="content-link">
      <div>
        <img src={props.image} alt="logo" />
        <p>Some text</p>
      </div>
    </a>
  )
}

ContentLink.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ContentLink;
