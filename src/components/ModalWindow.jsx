import React from 'react';
import PropTypes from 'prop-types';

function ModalWindow({
  linksArray,
  modalWindowVision,
  newLink,
  onClickExit,
  onChange,
  onClickAddLink,
}) {
  const textariaInput = React.createRef();
  const keyButtonEnterNumber = 9;

  function handleClick(e) {
    if (e.keyCode === keyButtonEnterNumber) {
      e.preventDefault();
      textariaInput.current.focus();
    }
  }

  return modalWindowVision && (
    <div className="modal__cover">
      <div className="modal">
        <h2>A new tab</h2>
        <div>
          <label htmlFor="tabName">The tabs name:</label>
          <input
            type="text"
            name="tabName"
            id="tabName"
            tabIndex="41"
            onChange={onChange}
            autoFocus
            ref={textariaInput}
          />
        </div>
        <div>
          <label htmlFor="tabAdress">The tabs adress:</label>
          <input
            type="text"
            name="tabAdress"
            id="tabAdress"
            tabIndex="42"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="tabPicture">The tabs icon:</label>
          <input
            type="text"
            name="tabPicture"
            id="tabPicture"
            tabIndex="43"
            onChange={onChange}
          />
        </div>
        <p>*if amount of links are more then 11 it will replace the 1-st one in your list</p>

        <button
          tabIndex="44"
          type="button"
          className="modal__button_enter"
          onClick={() => onClickAddLink(linksArray, newLink)}
        >
          {'add a new tab'}
        </button>
        <button
          tabIndex="45"
          type="button"
          className="modal__button_exit"
          onClick={onClickExit}
          onKeyDown={e => handleClick(e)}
        >
          {'x'}
        </button>
      </div>
    </div>);
}

ModalWindow.propTypes = {
  linksArray: PropTypes.instanceOf(Array).isRequired,
  modalWindowVision: PropTypes.bool,
  newLink: PropTypes.instanceOf(Object).isRequired,
  onClickExit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onClickAddLink: PropTypes.func.isRequired,
};

export default ModalWindow;
