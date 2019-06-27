import React from 'react';
import PropTypes from 'prop-types';

function ContentLink({
  link,
  image,
  text,
  onClickOpenModal,
}) {
  return (
    <a href={link} className="content-link" onClick={e => onClickOpenModal(e)}>
      <div>
        <img src={image} alt="logo" />
        <p>{text || 'add a new link'}</p>
      </div>
    </a>
  );
}

ContentLink.defaultProps = {
  link: '',
  text: '',
  onClickOpenModal: null,
};

ContentLink.propTypes = {
  link: PropTypes.string,
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
  onClickOpenModal: PropTypes.func,
};

export default ContentLink;
