// reducers

import {
  CUSTOMIZATION_ASIDE_TOGGLE,
  FILL_TABLE_OF_VISITED_SITES,
  FILL_WEATHER,
} from './actions'

let initialState = {
  arrayOfVisitedSites: [],
  customizationAside: false,
  weatherObject: null,
  weatherIsLoaded: false,
  weatherError: null,
}

export default function reducerCalendar(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case CUSTOMIZATION_ASIDE_TOGGLE:
      return Object.assign({}, state, {
        customizationAside: action.action.customizationAside,
      })
    case FILL_TABLE_OF_VISITED_SITES:
      return Object.assign({}, state, {
        arrayOfVisitedSites: action.action.arrayOfVisitedSites,
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