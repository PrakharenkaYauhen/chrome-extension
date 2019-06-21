import React from 'react';
// import logo from '../images/Penguin_2.ico';

import HeaderCNT from '../containers/HeaderCNT';
import ContentCNT from '../containers/ContentCNT';
import FootballCNT from '../containers/FootballCNT';
import CustomizationCNT from '../containers/CustomizationCNT';
// import TableOfVisitedSitesCNT from '../containers/TableOfVisitedSites';

function App() {
  return (
    <div className="App">
      <HeaderCNT />
      <ContentCNT />
      <FootballCNT />
      <CustomizationCNT />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Chrome extension</p>

        <TableOfVisitedSitesCNT />

      </header> */}

    </div>
  );
}

export default App;
