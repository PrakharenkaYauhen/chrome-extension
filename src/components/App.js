import React from 'react';

import HeaderCNT from '../containers/HeaderCNT';
import ContentCNT from '../containers/ContentCNT';
import CustomizationCNT from '../containers/CustomizationCNT';
import SlidingWindowForIconsCNT from '../containers/SlidingWindowForIconsCNT';
import ModalWindowCNT from '../containers/ModalWindowCNT';

function App({ customizationSiteBackgroundPhoto }) {
  return (
    <div className={!customizationSiteBackgroundPhoto ? "App" : "App-photo"}>
      <HeaderCNT />
      <ContentCNT />
      <CustomizationCNT />
      <SlidingWindowForIconsCNT />
      <ModalWindowCNT />
    </div>
  );
}

export default App;
