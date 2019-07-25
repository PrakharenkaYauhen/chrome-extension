/* global chrome */

import React from 'react';
import ModalWindowBookmarkCNT from '../containers/ModalWindowBookmarkCNT';
// import PropTypes from 'prop-types';
// import styles from '../styles/HeaderIcon.scss';
import folder from '../images/folder.png';

class Bookmarks extends React.Component {
  componentDidMount() {
    const {
      getTreeBookmarks,
      changeContextMenu,
    } = this.props;

    if (chrome.storage) {
      getTreeBookmarks();
      changeContextMenu();
    }
  }

  render() {
    const {
      chromeBookmarks,
      getTreeBookmarks,
      onRightClickLink,
    } = this.props;

    const itemLink = (url, title, id) => {
      return (
        <a
          href={url}
          id={id}
          onContextMenuCapture={e => onRightClickLink(e, getTreeBookmarks)}
        >
          <img
            src={`http://s2.googleusercontent.com/s2/favicons?domain_url=${url}`}
            alt=""
          />
          <span>{title}</span>
          {<span className="tooltiptext">{url}</span>}
        </a>
      )
    }

    const makeList = array => {
      return array.map((item) => {
        return (
          <li key={item.dateAdded}>
            {itemLink(item.url, item.title, item.id)}
          </li>
        )
      })
    }

    const content = chromeBookmarks.map((item) => {
      return (
        <li key={item.dateAdded}>
          {item.children
            ? (
              <a
                href='#0'
                id={item.id}
                onContextMenuCapture={e => onRightClickLink(e, getTreeBookmarks)}
              >
                <button>
                  <img src={folder} alt="" />
                  <span>{item.title}</span>
                </button>
                <ol className="links-list-inside">
                  {makeList(item.children)}
                </ol>
              </a>
            )
            : (
              itemLink(item.url, item.title, item.id)
            )
          }
        </li >
      )
    })

    return (
      <div className="bookmarks">
        <ul className="links-list">
          {content}
        </ul>
        <div className="bookmarks-add-link">
          <h1>Bookmarks</h1>
        </div>
        <ModalWindowBookmarkCNT />
      </div>
    );
  }
}

// HeaderIcon.propTypes = {
//   image: PropTypes.string.isRequired,
//   icon: PropTypes.string.isRequired,
//   toggleCustomization: PropTypes.func.isRequired,
//   toggleIcons: PropTypes.func.isRequired,
//   sliderWindowVision: PropTypes.bool.isRequired,
// };

export default Bookmarks;