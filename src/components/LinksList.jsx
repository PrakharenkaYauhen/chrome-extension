/* global chrome */

import React from 'react';
import PropTypes from 'prop-types';
import plus from '../images/plus.png';
import ContentLinkCNT from '../containers/ContentLinkCNT';

class LinksList extends React.Component {
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
      linksArrayString,
    } = this.props;

    const content = linksArray.map((item, i) => (
      <ContentLinkCNT
        key={item.text}
        image={item.image}
        text={item.text}
        link={item.link}
        index={i}
      />
    ));

    return (
      <div>
        {content}
        <ContentLinkCNT image={plus} index={-1} />
      </div>
    );
  }
}

LinksList.defaultProps = {
  linksArrayString: '',
};

LinksList.propTypes = {
  linksArray: PropTypes.instanceOf(Array).isRequired,
  linksArrayString: PropTypes.string,
  getChromeLocalStorage: PropTypes.func.isRequired,
};

export default LinksList;
