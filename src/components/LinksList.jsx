/* global chrome */

import React from 'react';
// import PropTypes from 'prop-types';
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
  };

  render() {
    const {
      linksArray,
      provided,
      innerRef,
    } = this.props;

    let array = linksArray;

    console.log(array);

    const content = array.map((item, i) => (
      <ContentLinkCNT
        key={item.text}
        image={item.image}
        text={item.text}
        link={item.link}
        index={i}
      />
    ));

    return (
      <div
        {...provided.droppableProps}
        ref={innerRef}
      >
        {provided.placeholder}
        {content}
        {/* <ContentLinkCNT image={plus} index={1000}/> */}
      </div>
    )
  }
}

export default LinksList;