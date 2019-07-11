import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ContentLink.scss';
// import '../styles/ContentLink.scss';
import Penguin from '../images/Penguin.ico';

class ContentLink extends React.Component {
  render() {
    const {
      link,
      image,
      text,
      index,
      linksArray,
      onClickOpenModal,
      deleteLink,
      dragItemStart,
      dragItemOver,
      dragItemEnter,
      dragItemLeave,
      dragItemEnd,
      dragItemDrop,
    } = this.props;

    return (
      <div className="link" >
        <a
          href={link}
          className={styles.a}
          onClick={!text ? e => onClickOpenModal(e) : null}
          draggable="true"
          id={index}
          onDragStart={e => dragItemStart(e, index)}
          onDragOver={dragItemOver}
          onDragEnter={e => dragItemEnter(e, index)}
          onDragLeave={e => dragItemLeave(e, index)}
          onDragEnd={dragItemEnd}
          onDrop={e => dragItemDrop(e, linksArray, index)}
        >
          <div>
            <img src={image} alt="logo" draggable="false" onError={e => {
              return e.target.src = Penguin
            }
            }
            />
            <p>{text || 'add a new link'}</p>
          </div>
        </a>
        {text
          ? <button onClick={e => deleteLink(e, linksArray)}>
            {'-'}
          </button>
          : null}
      </div>
    );
  }
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
  deleteLink: PropTypes.func.isRequired,
};

export default ContentLink;
