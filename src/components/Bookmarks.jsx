/* global chrome */

import React from 'react';
// import PropTypes from 'prop-types';
// import styles from '../styles/HeaderIcon.scss';
import folder from '../images/folder.png';

class Bookmarks extends React.Component {
  componentDidMount() {
    const {
      getTreeBookmarks,
    } = this.props;

    if (chrome.storage) {
      getTreeBookmarks();
    }
  }

  // componentDidUpdate(prevProps) {
  //   const {
  //     chromeBookmarks,
  //     getTreeBookmarks,
  //   } = this.props;
  //   if (JSON.stringify(prevProps.chromeBookmarks) !== JSON.stringify(chromeBookmarks)) {
  //     getTreeBookmarks();
  //   }
  // }

  render() {
    const {
      chromeBookmarks,
      newBookmark,
      getTreeBookmarks,
      onChange,
      setNewLink,
    } = this.props;

    const itemLink = (url, title) => {
      return (
        <a href={url}>
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
            {itemLink(item.url, item.title)}
          </li>
        )
      })
    }

    const content = chromeBookmarks.map((item) => {
      return (
        <li key={item.dateAdded}>
          {item.children
            ? (
              <>
                <button>
                  <img src={folder} alt="" />
                  <span>{item.title}</span>
                </button>
                <ol className="links-list-inside">
                  {makeList(item.children)}
                </ol>
              </>
            )
            : (
              itemLink(item.url, item.title)
            )
          }
        </li >
      )
    })

    return (
      <div className="bookmarks" >
        <ul className="links-list">
          {content}
        </ul>
        <div>
          <h1>Bookmarks</h1>
          <div>
            <label htmlFor="formOfLink">Check if you want to make a folder insted of link: </label>
            <input
              type="checkbox"
              name="formOfLink"
              id="formOfLink"
              // value={true}
              onChange={onChange}
              // checked={newBookmark.title}
              checked={null}
            />
          </div>
          <div>
            <label htmlFor="linkTitle">Link's or folder's title: </label>
            <input
              type="text"
              name="linkTitle"
              id="linkTitle"
              value={newBookmark.title}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="linkAdress">Link's adress: </label>
            <input
              // disabled={newBookmark.check ? null : "disabled"}
              disabled={newBookmark.check ? "disabled" : null}
              type="text"
              name="linkAdress"
              id="linkAdress"
              value={newBookmark.link}
              onChange={onChange}
            />
          </div>
          <button
            onClick={() => setNewLink(newBookmark, getTreeBookmarks)}
          >
            {'add link or folder'}
          </button>
        </div>
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