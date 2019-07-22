import React from 'react';
// import PropTypes from 'prop-types';
// import styles from '../styles/HeaderIcon.scss';

function RightClickModal({
  rightClickBookmarksId,
  rightClickBookmarksModalTop,
  rightClickBookmarksModalLeft,
  getTreeBookmarks,
  deleteBookmarkLink,
}) {
  console.log(rightClickBookmarksModalLeft);
  return (
    <div
      className="right-click-modal"
      style={{
        top: rightClickBookmarksModalTop,
        left: rightClickBookmarksModalLeft,
      }}
    >
      <ul>
        <li>open link</li>
        <li>rename link</li>
        <li onClick={e => deleteBookmarkLink(e, rightClickBookmarksId, getTreeBookmarks)}>delete link</li>
      </ul>
    </div >
  );
}

// HeaderIcon.propTypes = {
//   image: PropTypes.string.isRequired,
//   icon: PropTypes.string.isRequired,
//   toggleCustomization: PropTypes.func.isRequired,
//   toggleIcons: PropTypes.func.isRequired,
//   sliderWindowVision: PropTypes.bool.isRequired,
// };

export default RightClickModal;
