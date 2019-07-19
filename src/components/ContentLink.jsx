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
      changeState,

      dragItemStart,
      dragItemOver,
      dragItemEnter,
      dragItemLeave,
      dragItemEnd,
      dragItemDrop,
    } = this.props;

    return (
      <div className="link">
        <a
          href={link}
          className={styles.a}
          onClick={!text ? e => onClickOpenModal(e) : null}
          draggable={index >= 0 ? "true" : false}
          id={index}
          onDragStart={e => dragItemStart(e, index)}
          onDragOver={e => dragItemOver(e, index)}
          onDragEnter={e => dragItemEnter(e, index)}
          onDragLeave={e => dragItemLeave(e, index)}
          onDragEnd={e => dragItemEnd(e, index)}
          onDrop={e => dragItemDrop(e, index, linksArray, changeState)}
        >
          <div>
            <img
              src={image}
              alt="logo"
              draggable="false"
              onError={(e) => {
                e.target.src = Penguin;
                return e.target.src;
              }
              }
            />
            <p>{text || 'add a new link'}</p>
          </div>
        </a>
        {text
          ? (
            <button type="button" onClick={e => deleteLink(e, linksArray)}>
              {'-'}
            </button>
          )
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
  index: PropTypes.number.isRequired,
  linksArray: PropTypes.instanceOf(Array).isRequired,
  onClickOpenModal: PropTypes.func,
  deleteLink: PropTypes.func.isRequired,
  dragItemStart: PropTypes.func.isRequired,
  dragItemOver: PropTypes.func.isRequired,
  dragItemEnter: PropTypes.func.isRequired,
  dragItemLeave: PropTypes.func.isRequired,
  dragItemEnd: PropTypes.func.isRequired,
  dragItemDrop: PropTypes.func.isRequired,
};

export default ContentLink;
