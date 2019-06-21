/* global chrome */

// Container tableOfVisitedSitesCNT

import React from 'react';
import { connect } from 'react-redux'
import TableOfVisitedSites from '../components/TableOfVisitedSites'
import { actionFillTableOfVisitedSites } from '../actions'

const mapStateToProps = (state) => {
  console.log(state);
  const {
    arrayOfVisitedSites,
  } = state;

  return {
    arrayOfVisitedSites,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getListOfVisitedSites: () => {
      if (!chrome.history) {
        let visitedSitesList = [<tr key="1"><td>a</td><td>b</td><td>c</td></tr>,
        <tr key="2"><td>a</td><td>b</td><td>{'cссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссс'.substr(0, 20)}</td></tr>,
        <tr key="3"><td>a</td><td>b</td><td>c</td></tr>];
        console.log(visitedSitesList);
        let action = {
          arrayOfVisitedSites: visitedSitesList,
        }
        dispatch(actionFillTableOfVisitedSites(action));
      } else {
        chrome.history.search({
          'text': '',
          'maxResults': 10,
        }, (array) => {
          console.log(array);
          let visitedSitesList = array.map((item, i) => (
            <tr key={item.id}>
              <td>{i + 1}</td>
              <td>{item.title}</td>
              <td>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.url.length > 50
                    ? item.url.substr(0, 50) + '...'
                    : item.url}
                </a></td>
            </tr>)
          );
          console.log(visitedSitesList);
          let action = {
            arrayOfVisitedSites: visitedSitesList,
          }
          dispatch(actionFillTableOfVisitedSites(action));
        });
      }
    }
  }
}

const TableOfVisitedSitesCNT = connect(mapStateToProps, mapDispatchToProps)(TableOfVisitedSites);

export default TableOfVisitedSitesCNT;
