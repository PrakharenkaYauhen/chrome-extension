/* global chrome */

import React from 'react';
import PropTypes from 'prop-types';
import plus from '../images/plus.png';
import ContentLinkCNT from '../containers/ContentLinkCNT';
import { ExampleContext } from '../helpers/dragAndDrop';

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
      pageForTheSlideWindow,
    } = this.props;

    // const linksArray = JSON.parse(linksArrayString);

    const content = linksArray.map((item, i) => (
      <ExampleContext.Consumer key={item.text}>
        {dragContext => (
          <ContentLinkCNT
            image={item.image}
            text={item.text}
            link={item.link}
            index={i}
            {...dragContext}
          />
        )}
      </ExampleContext.Consumer>
    ));

    return (
      <div
        style={pageForTheSlideWindow === null || pageForTheSlideWindow === 'cross'
          ? null
          : { display: 'none' }}
      >
        {content}
        <ExampleContext.Consumer>
          {dragContext => (
            <ContentLinkCNT image={plus} index={-1} {...dragContext} />
          )}
        </ExampleContext.Consumer>
      </div>
    );
  }
}

LinksList.defaultProps = {
  linksArrayString: '',
};

LinksList.propTypes = {
  linksArrayString: PropTypes.string,
  getChromeLocalStorage: PropTypes.func.isRequired,
};

export default LinksList;
