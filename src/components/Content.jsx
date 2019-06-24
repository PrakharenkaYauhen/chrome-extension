// Component Content

import React from 'react';
// import logo from '../images/Penguin_2.ico';
import plus from '../images/plus.png';
import github from '../images/github.png';
import gmailLogo from '../images/gmail-logo.png';
import leverx from '../images/leverx.webp';
import googleCalendar from '../images/google-calendar.png';
import googleDocs from '../images/google-docs.png';
import youtube from '../images/youtube.png';
import javascript from '../images/javascript.png';
// import PropTypes from 'prop-types';
import ContentLink from './ContentLink'

function Content() {
  return (
    <div className="content">
      <div>
        <ContentLink image={gmailLogo} text={'Google mail'} link={'https://mail.google.com/mail'}/>
        <ContentLink image={leverx} text={'Leverxeu dashboard'} link={'https://leverxeu.atlassian.net/secure/Dashboard.jspa'}/>
        <ContentLink image={googleCalendar} text={'Google calendar'} link={'https://calendar.google.com/calendar/r'}/>
        <ContentLink image={googleDocs} text={'Google docs'} link={'https://docs.google.com/document/u/0/?tgif=d'}/>
        <ContentLink image={youtube} text={'Youtube'} link={'https://www.youtube.com/'}/>
        <ContentLink image={javascript} text={'Учебник Javascript'} link={'https://learn.javascript.ru/'}/>
        <ContentLink image={github} text={'Github'} link={'https://github.com/'}/>
        <ContentLink image={plus}/>
      </div>
    </div>
  )
}

export default Content;
