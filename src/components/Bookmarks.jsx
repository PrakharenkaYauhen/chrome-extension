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

    const makeList = array => {
      return array.map((item) => {
        return (
          <li key={item.title}>
            <a href={item.url}>
              <img
                src={`http://s2.googleusercontent.com/s2/favicons?domain_url=${item.url}`}
              />
              <span>{item.title}</span>
              {/* {item.children[0].title} */}
              {<span className="tooltiptext">{item.url}</span>}
            </a>
          </li>
        )
      })
    }

    const content = chromeBookmarks.map((item) => {
      return (
        <li key={item.dateAdded}>
          <a href={item.children ? null : item.url}>
            <img
              src={item.children
                ? folder
                : `http://s2.googleusercontent.com/s2/favicons?domain_url=${item.url}`}
            />
            <span>{item.title}</span>
            {item.url ? <span className="tooltiptext">{item.url}</span> : null}
          </a>
          {item.children
            ? <ol className="links-list-inside">
              {makeList(item.children)}
            </ol>
            : null}
        </li>
      )
    })

    return (
      <div className="bookmarks">
        <ul className="links-list">
          {content}
        </ul>
        <h1>Bookmarks</h1>
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



{/* <li key={item.children[0].title}> */ }
  // <a href={item.children[0].url}>
    // <img
      // src={`http://s2.googleusercontent.com/s2/favicons?domain_url=${item.children[0].url}`}
    // />
    // <span>{item.children[0].title}</span>
    // {/* {item.children[0].title} */}
    // {<span className="tooltiptext">{item.children[0].url}</span>}
  // </a>
// </li>