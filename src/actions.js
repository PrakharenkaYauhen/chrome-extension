export const ICONS_ACTIONS_TOGGLE = 'ICONS_ACTIONS_TOGGLE'
export const CUSTOMIZATION_ASIDE_TOGGLE = 'CUSTOMIZATION_ASIDE_TOGGLE'
export const FILL_TABLE_OF_VISITED_SITES = 'FILL_TABLE_OF_VISITED_SITES'
export const FILL_JUVENTUS = 'FILL_JUVENTUS'
export const FILL_WEATHER = 'FILL_WEATHER'
export const MODAL_WINDOW = 'MODAL_WINDOW'
export const FORM_NEW_LINK = 'FORM_NEW_LINK'
export const ADD_NEW_LINK = 'ADD_NEW_LINK'
export const GET_CHROME_LOCAL_STORAGE = 'GET_CHROME_LOCAL_STORAGE'
export const SET_CUSTOMIZATION_COLUMN_NUMBER = 'SET_CUSTOMIZATION_COLUMN_NUMBER'
export const SET_CUSTOMIZATION_LINK_SIZE = 'SET_CUSTOMIZATION_LINK_SIZE'
export const SET_CUSTOMIZATION_SITE_COLOR = 'SET_CUSTOMIZATION_SITE_COLOR'

export function toggleIconsActions(action) {
  return { type: ICONS_ACTIONS_TOGGLE, action }
}

export function toggleAsideCustomiztion(action) {
  return { type: CUSTOMIZATION_ASIDE_TOGGLE, action }
}

export function actionFillTableOfVisitedSites(action) {
  return { type: FILL_TABLE_OF_VISITED_SITES, action }
}

export function actionFillJuventus(action) {
  return { type: FILL_JUVENTUS, action }
}

export function actionFillWeather(action) {
  // console.log(action);
  return { type: FILL_WEATHER, action }
}

export function actionModalWindow(action) {
  // console.log(action);
  return { type: MODAL_WINDOW, action }
}

export function actionFormNewLink(action) {
  // console.log(action);
  return { type: FORM_NEW_LINK, action }
}

export function actionAddNewLink(action) {
  // console.log(action);
  return { type: ADD_NEW_LINK, action }
}

export function actionGetChromeLocalStorage(action) {
  // console.log(action);
  return { type: GET_CHROME_LOCAL_STORAGE, action }
}

export function actionSetCustomizationColumnNumber(action) {
  // console.log(action);
  return { type: SET_CUSTOMIZATION_COLUMN_NUMBER, action }
}

export function actionSetCustomizationLinkSize(action) {
  // console.log(action);
  return { type: SET_CUSTOMIZATION_LINK_SIZE, action }
}

export function actionSetCustomizationSiteColor(action) {
  // console.log(action);
  return { type: SET_CUSTOMIZATION_SITE_COLOR, action }
}