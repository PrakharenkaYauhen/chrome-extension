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

  render() {
    const {
      chromeBookmarks,
    } = this.props;

    const content = chromeBookmarks.map((item) => {
      return (
        <li>
          <img
            src={item.title
              ? folder
              : `http://s2.googleusercontent.com/s2/favicons?domain_url=${item.url}`}
          />
          <a href="http://">{item.title ? item.title : item.url}
          </a>
        </li>
      )
    })

    return (
      <div className="bookmarks">
        <h1>Bookmarks</h1>
        <ul>
          {content}
        </ul>
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
