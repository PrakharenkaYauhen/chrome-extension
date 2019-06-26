import React from 'react';
import PropTypes from 'prop-types';

function ContentLink(props) {
  // console.log(props)
  console.log(2)
  return (
    <a
      href={props.link}
      className="content-link"
      // target="_blank"
      // rel="noopener noreferrer"
    >
      <div onClick={props.onClickOpenModal}>
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
