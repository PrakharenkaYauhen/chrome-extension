import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ContentLink.scss';
// import '../styles/ContentLink.scss';
import Penguin from '../images/Penguin.ico';
import { Draggable } from 'react-beautiful-dnd';

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
    } = this.props;

    console.log(index);

    return (
      <Draggable draggableId={index + ''} index={index}>
        {(provided) => {
          return (
            <div className="link"
            >
              <a
                href={link}
                className={styles.a}
                onClick={!text ? e => onClickOpenModal(e) : null}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <div>
                  <img src={image} alt="logo" onError={e => {
                    // console.log(e.target);
                    return e.target.src = Penguin
                  }
                  }
                  />
                  <p>{text || 'add a new link'}</p>
                </div>
                {text
                  ? <button onClick={e => deleteLink(e, linksArray)}>
                    {'-'}
                  </button>
                  : null}
              </a>
            </div>
          )
        }}
      </Draggable>
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
