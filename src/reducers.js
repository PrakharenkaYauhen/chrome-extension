// reducers

import {
  ICONS_ACTIONS_TOGGLE,
  CUSTOMIZATION_ASIDE_TOGGLE,
  FILL_TABLE_OF_VISITED_SITES,
  FILL_JUVENTUS,
  FILL_WEATHER,
} from './actions'

let initialState = {
  arrayOfVisitedSites: [],
  iconsActions: false,
  pageForTheSlideWindow: null,
  customizationAside: false,
  juventusStuffObject: null,
  juventusStuffIsLoaded: false,
  juventusStuffError: null,
  weatherObject: null,
  weatherIsLoaded: false,
  weatherError: null,
}

export default function reducerCalendar(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case ICONS_ACTIONS_TOGGLE:
      return Object.assign({}, state, {
        iconsActions: action.action.iconsActions,
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
    default:
      return state
  }
};