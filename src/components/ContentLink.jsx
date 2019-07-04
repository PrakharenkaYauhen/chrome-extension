import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ContentLink.scss';
// import '../styles/ContentLink.scss';
import Penguin from '../images/Penguin.ico';

function ContentLink({
  link,
  image,
  text,
  onClickOpenModal,
  deleteLink,
  linksArray,
}) {
  return (
    <div className="link">
      <a href={link} className={styles.a} onClick={e => onClickOpenModal(e)}>
        <div>
          <img src={image} alt="logo" onError={e => {
            console.log(e.target);
            return e.target.src = Penguin
          }
          }
          />
          <p>{text || 'add a new link'}</p>
        </div>
      </a>
      <button onClick={e => deleteLink(e, linksArray)}>
        {'-'}
      </button>
    </div>
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
