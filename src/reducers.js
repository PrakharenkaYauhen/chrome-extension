// import github from './images/github.png';
// import gmailLogo from './images/gmail-logo.png';
// import leverx from './images/leverx.webp';
// import googleCalendar from './images/google-calendar.png';
// import googleDocs from './images/google-docs.png';
// import youtube from './images/youtube.png';
// import javascript from './images/javascript.png';
// import react from './images/react.png';
// import redux from './images/redux.png';
import setCssVariables from './helpers/setCssVariables';

import {
  ICONS_ACTIONS_TOGGLE,
  CUSTOMIZATION_ASIDE_TOGGLE,
  FILL_TABLE_OF_VISITED_SITES,
  FILL_JUVENTUS,
  FILL_WEATHER,
  MODAL_WINDOW,
  FORM_NEW_LINK,
  ADD_NEW_LINK,
  GET_CHROME_LOCAL_STORAGE,
  SET_CUSTOMIZATION_COLUMN_NUMBER,
  SET_CUSTOMIZATION_LINK_SIZE,
  SET_CUSTOMIZATION_SITE_COLOR,
  SET_CUSTOMIZATION_BACKGROUND_PHOTO,
} from './actions'

const defaultNumberOfColumns = 4;
const defaultBackgroundColor = '#282c34';
const defaultLinkSize = '150px';
const defaultBackgroundPhoto = null;

let initialState = {
  // linksArray: [
  //   {
  //     image: gmailLogo,
  //     text: 'Google mail',
  //     link: 'https://mail.google.com/mail',
  //   },
  //   {
  //     image: leverx,
  //     text: 'Leverxeu dashboard',
  //     link: 'https://leverxeu.atlassian.net/secure/Dashboard.jspa',
  //   },
  //   {
  //     image: googleCalendar,
  //     text: 'Google calendar',
  //     link: 'https://calendar.google.com/calendar/r',
  //   },
  //   {
  //     image: googleDocs,
  //     text: 'Google docs',
  //     link: 'https://docs.google.com/document/u/0/?tgif=d',
  //   },
  //   {
  //     image: youtube,
  //     text: 'Youtube',
  //     link: 'https://www.youtube.com/',
  //   },
  //   {
  //     image: javascript,
  //     text: 'Учебник Javascript',
  //     link: 'https://learn.javascript.ru/',
  //   },
  //   {
  //     image: github,
  //     text: 'Github',
  //     link: 'https://github.com/',
  //   },
  //   {
  //     image: react,
  //     text: 'React',
  //     link: 'https://reactjs.org/',
  //   },
  //   {
  //     image: redux,
  //     text: 'Redux',
  //     link: 'https://redux.js.org/',
  //   },
  // ],
  linksArray: JSON.parse(localStorage.getItem('linksArray')) || [],
  linksArrayString: '',
  newLink: {},
  arrayOfVisitedSites: [],
  sliderWindowVision: false,
  pageForTheSlideWindow: null,
  customizationAside: false,
  customizationColumnsNumber: localStorage.getItem('customization') ?
    JSON.parse(localStorage.getItem('customization'))['rowNumber']
    : defaultNumberOfColumns,
  customizationLinkSize: (localStorage.getItem('customization')
    && JSON.parse(localStorage.getItem('customization'))['linkSize'])
    || defaultLinkSize,
  customizationSiteColor: (localStorage.getItem('customization')
    && JSON.parse(localStorage.getItem('customization'))['siteColor'])
    || defaultBackgroundColor,
  customizationSiteBackgroundPhoto: (localStorage.getItem('customization')
    && JSON.parse(localStorage.getItem('customization'))['backgroundPhoto'])
    || defaultBackgroundPhoto,
  juventusStuffObject: null,
  juventusStuffIsLoaded: false,
  juventusStuffError: null,
  weatherObject: null,
  weatherIsLoaded: false,
  weatherError: null,
  modalWindowVision: false,
}
// localStorage.setItem('linksArray', JSON.stringify(initialState.linksArray));
// console.log(initialState);
setCssVariables('--columns-number', initialState.customizationColumnsNumber);
setCssVariables('--link-size', initialState.customizationLinkSize);
setCssVariables('--main-color', initialState.customizationSiteColor);
setCssVariables('--background-photo', initialState.customizationSiteBackgroundPhoto);

export default function reducerExtension(state = initialState, action) {
  switch (action.type) {
    case ICONS_ACTIONS_TOGGLE:
      return Object.assign({}, state, {
        sliderWindowVision: action.action.sliderWindowVision,
        pageForTheSlideWindow: action.action.pageForTheSlideWindow,
      })
    case CUSTOMIZATION_ASIDE_TOGGLE:
      return Object.assign({}, state, {
        customizationAside: action.action.customizationAside,
      })
    case FILL_TABLE_OF_VISITED_SITES:
      return Object.assign({}, state, {
        arrayOfVisitedSites: action.action.arrayOfVisitedSites,
      })
    case FILL_JUVENTUS:
      return Object.assign({}, state, {
        juventusObject: action.action.juventusObject,
        juventusIsLoaded: action.action.juventusIsLoaded,
        juventusError: action.action.juventusError,
      })
    case FILL_WEATHER:
      return Object.assign({}, state, {
        weatherObject: action.action.weatherObject,
        weatherIsLoaded: action.action.weatherIsLoaded,
        weatherError: action.action.weatherError,
      })
    case MODAL_WINDOW:
      return Object.assign({}, state, {
        modalWindowVision: action.action.modalWindowVision,
      })
    case FORM_NEW_LINK:
      return Object.assign({}, state, {
        newLink: action.action.newLink,
      })
    case ADD_NEW_LINK:
      return Object.assign({}, state, {
        linksArray: action.action.linksArray,
        linksArrayString: action.action.linksArray,
        modalWindowVision: action.action.modalWindowVision,
        newLink: action.action.newLink,
      })
    case GET_CHROME_LOCAL_STORAGE:
      return Object.assign({}, state, {
        linksArray: action.action.linksArray,
        linksArrayString: action.action.linksArrayString,
      })
    case SET_CUSTOMIZATION_COLUMN_NUMBER:
      return Object.assign({}, state, {
        customizationColumnsNumber: action.action.customizationColumnsNumber,
      })
    case SET_CUSTOMIZATION_LINK_SIZE:
      return Object.assign({}, state, {
        customizationLinkSize: action.action.customizationLinkSize,
      })
    case SET_CUSTOMIZATION_SITE_COLOR:
      return Object.assign({}, state, {
        customizationSiteColor: action.action.customizationSiteColor,
      })
    case SET_CUSTOMIZATION_BACKGROUND_PHOTO:
      return Object.assign({}, state, {
        customizationSiteBackgroundPhoto: action.action.customizationSiteBackgroundPhoto,
      })
    default:
      return state
  }
};