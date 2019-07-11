import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ContentLink.scss';
// import '../styles/ContentLink.scss';
import Penguin from '../images/Penguin.ico';
// import { Draggable } from 'react-beautiful-dnd';

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
      // <Draggable draggableId={index + ''} index={index}>
      //   {(provided) => {
      // return (
      <div
        className="link"
      // draggable="true"
      // id={index}
      // onDragStart={dragItemStart}
      // onDragOver={dragItemOver}
      // onDragEnter={dragItemEnter}
      // onDrop={dragItemDrop}
      >
        <a
          href={link}
          className={styles.a}
          onClick={!text ? e => onClickOpenModal(e) : null}
          // ref={provided.innerRef}
          // {...provided.draggableProps}
          // {...provided.dragHandleProps}   
          draggable="true"
          id={index}
          onDragStart={dragItemStart}
          onDragOver={dragItemOver}
          onDragEnter={dragItemEnter}
          onDragLeave={dragItemLeave}
          onDragEnd={dragItemEnd}
          onDrop={e => dragItemDrop(e, linksArray)}
        >
          <div>
            <img src={image} alt="logo" draggable="false" onError={e => {
              // console.log(e.target);
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
      // )
      //   }}
      // </Draggable>
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
