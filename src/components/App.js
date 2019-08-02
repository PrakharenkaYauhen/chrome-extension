import React from 'react';

import HeaderCNT from '../containers/HeaderCNT';
import ContentCNT from '../containers/ContentCNT';
import CustomizationCNT from '../containers/CustomizationCNT';
import SlidingWindowForIconsCNT from '../containers/SlidingWindowForIconsCNT';
import ModalWindowCNT from '../containers/ModalWindowCNT';
import AuthenticationWindowCNT from '../containers/AuthenticationWindowCNT';

function App({ customizationSiteBackgroundPhoto, pageForTheSlideWindow }) {
  return (
    <div className={!customizationSiteBackgroundPhoto ? "App" : "App-photo"}>
      <HeaderCNT />
      {/* {pageForTheSlideWindow === null || pageForTheSlideWindow === 'cross' ? <ContentCNT /> : null} */}
      <ContentCNT />
      <CustomizationCNT />
      <SlidingWindowForIconsCNT />
      <ModalWindowCNT />
      <AuthenticationWindowCNT />
    </div>
  );
}

export default App;
