import React from 'react';

import HeaderCNT from '../containers/HeaderCNT';
import ContentCNT from '../containers/ContentCNT';
import CustomizationCNT from '../containers/CustomizationCNT';
import SlidingWindowForIconsCNT from '../containers/SlidingWindowForIconsCNT';
import ModalWindowCNT from '../containers/ModalWindowCNT';
import AuthenticationWindowCNT from '../containers/AuthenticationWindowCNT';
import EmptyPage from '../components/EmptyPage';

function App({
  customizationSiteBackgroundPhoto,
  authWindowVision
}) {
  if (!authWindowVision) {
    return (
      <div className="empty-page">
        <EmptyPage />
        <AuthenticationWindowCNT />
      </div>
    )
  } else {
    return (
      <div className={!customizationSiteBackgroundPhoto ? "App" : "App-photo"}>
        {/* {pageForTheSlideWindow === null || pageForTheSlideWindow === 'cross' ? <ContentCNT /> : null} */}
        <HeaderCNT />
        <ContentCNT />
        <CustomizationCNT />
        <SlidingWindowForIconsCNT />
        <ModalWindowCNT />
      </div>
    )
  }
  // return (
  //   <div className={!customizationSiteBackgroundPhoto ? "App" : "App-photo"}>
  //     {/* {pageForTheSlideWindow === null || pageForTheSlideWindow === 'cross' ? <ContentCNT /> : null} */}
  //     (<HeaderCNT />
  //     <ContentCNT />
  //     <CustomizationCNT />
  //     <SlidingWindowForIconsCNT />
  //     <ModalWindowCNT />)
  //     {!authWindowVision && <AuthenticationWindowCNT />}
  //   </div>
  // );
}

export default App;
