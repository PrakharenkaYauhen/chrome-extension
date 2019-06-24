import React from 'react';
import PropTypes from 'prop-types';

function ContentLink(props) {
  // console.log(props)
  return (
    <a
      href={props.link}
      className="content-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <img src={props.image} alt="logo" />
        <p>{props.text || 'add a new link'}</p>
      </div>
    </a>
  )
}

ContentLink.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ContentLink;
