// reducers

import {
  FILL_TABLE_OF_VISITED_SITES,
  FILL_WEATHER,
} from './actions'

let initialState = {
  arrayOfVisitedSites: [],
  weatherObject: null,
  weatherIsLoaded: false,
  weatherError: null,
}

export default function reducerCalendar(state = initialState, action) {
  console.log(action);
  switch (action.type) {
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