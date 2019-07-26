import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ModalWindowBookmark.scss';

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
          <label htmlFor="linkTitle">Link&apos;s or folder&apos;s title: </label>
          <input
            type="text"
            name="linkTitle"
            id="linkTitle"
            value={newBookmark.title}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="linkAdress">Link&apos;s adress: </label>
          <input
            disabled={newBookmark.check ? 'disabled' : null}
            type="text"
            name="linkAdress"
            id="linkAdress"
            value={newBookmark.link}
            onChange={onChange}
          />
        </div>
        <button
          type="button"
          onClick={e => setNewLink(e, newBookmark, getTreeBookmarks, modalWindowBookmarkId)}
        >
          {'add link or folder'}
        </button>
        <button
          type="button"
          onClick={e => setNewLink(e)}
        >
          {'cancel'}
        </button>
      </div>
    </div>);
}

ModalWindowBookmark.propTypes = {
  modalWindowBookmarkVision: PropTypes.bool.isRequired,
  newBookmark: PropTypes.instanceOf(Object).isRequired,
  modalWindowBookmarkId: PropTypes.string.isRequired,
  getTreeBookmarks: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  setNewLink: PropTypes.func.isRequired,
};

export default ModalWindowBookmark;
