import React from 'react';
// import PropTypes from 'prop-types';
// import styles from '../styles/ModalWindow.scss';
import '../styles/ModalWindow.scss';

function ModalWindowBookmark({
  modalWindowBookmarkVision,
  newBookmark,
  modalWindowBookmarkId,
  getTreeBookmarks,
  onChange,
  setNewLink,
}) {
  return modalWindowBookmarkVision && (
    <div className="modal-bookmark">
      <div className="bookmarks-add-link">
        <div>
          <label htmlFor="formOfLink">Check if you want to make a folder insted of link: </label>
          <input
            type="checkbox"
            name="formOfLink"
            id="formOfLink"
            onChange={onChange}
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
            disabled={newBookmark.check ? "disabled" : null}
            type="text"
            name="linkAdress"
            id="linkAdress"
          value={newBookmark.link}
          onChange={onChange}
          />
        </div>
        <button
          onClick={e => setNewLink(e, newBookmark, getTreeBookmarks, modalWindowBookmarkId)}
        >
          {'add link or folder'}
        </button>
        <button
          onClick={e => setNewLink(e)}
        >
          {'cancel'}
        </button>
      </div>
    </div>);
}

// ModalWindow.propTypes = {
//   linksArray: PropTypes.instanceOf(Array).isRequired,
//   modalWindowVision: PropTypes.bool,
//   newLink: PropTypes.instanceOf(Object).isRequired,
//   onClickExit: PropTypes.func.isRequired,
//   onChange: PropTypes.func.isRequired,
//   onClickAddLink: PropTypes.func.isRequired,
// };

export default ModalWindowBookmark;
