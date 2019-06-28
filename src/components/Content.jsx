/* global chrome */

import React from 'react';
import PropTypes from 'prop-types';
import plus from '../images/plus.png';
import ContentLink from './ContentLink';
// import styles from '../styles/Content.scss';
import '../styles/Content.scss';

class Content extends React.Component {
  componentDidMount() {
    const {
      getChromeLocalStorage,
    } = this.props;

    if (chrome.storage) {
      getChromeLocalStorage();
    }
  }

  render() {
    const {
      linksArray,
      onClickOpenModal,
    } = this.props;

    const content = linksArray.map(item => (
      <ContentLink key={item.text} image={item.image} text={item.text} link={item.link} />
    ));
    return (
      <div className="content">
        <div>
          {content}
          <ContentLink image={plus} onClickOpenModal={onClickOpenModal} />
        </div>
      </div>
    );
  }
}

Content.defaultProps = {
  linksArray: [],
};

Content.propTypes = {
  getChromeLocalStorage: PropTypes.func.isRequired,
  linksArray: PropTypes.instanceOf(Array),
  onClickOpenModal: PropTypes.func.isRequired,
};

export default Content;
