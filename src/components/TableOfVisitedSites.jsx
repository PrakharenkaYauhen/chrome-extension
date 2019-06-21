// Component tableOfVisitedSites

import React from 'react';
import PropTypes from 'prop-types';
import gifPreloader from '../images/free-loader-gif-3.gif';

class TableOfVisitedSites extends React.Component {
  componentDidMount() {
    const {
      getListOfVisitedSites,
    } = this.props;
    getListOfVisitedSites();
  }

  render() {
    const {
      arrayOfVisitedSites,
    } = this.props;
    return (
      <table className="visited-sites-table">
        <caption>Last 10 visited sites</caption>
        <thead>
          <tr>
            <th>№</th>
            <th>Title</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {arrayOfVisitedSites}
        </tbody>
      </table>); 
  }
}

export default TableOfVisitedSites;