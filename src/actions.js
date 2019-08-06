export const ICONS_ACTIONS_TOGGLE = 'ICONS_ACTIONS_TOGGLE'
export const CUSTOMIZATION_ASIDE_TOGGLE = 'CUSTOMIZATION_ASIDE_TOGGLE'
export const FILL_TABLE_OF_VISITED_SITES = 'FILL_TABLE_OF_VISITED_SITES'
export const FILL_JUVENTUS = 'FILL_JUVENTUS'
export const FILL_WEATHER = 'FILL_WEATHER'
export const MODAL_WINDOW = 'MODAL_WINDOW'
export const MODAL_WINDOW_BOOKMARK = 'MODAL_WINDOW_BOOKMARK'
export const FORM_NEW_LINK = 'FORM_NEW_LINK'
export const ADD_NEW_LINK = 'ADD_NEW_LINK'
export const NEW_BOOKMARK = 'NEW_BOOKMARK'
export const SET_CHROME_BOOKMARKS = 'SET_CHROME_BOOKMARKS'
export const GET_CHROME_LOCAL_STORAGE = 'GET_CHROME_LOCAL_STORAGE'
export const SET_CUSTOMIZATION_COLUMN_NUMBER = 'SET_CUSTOMIZATION_COLUMN_NUMBER'
export const SET_CUSTOMIZATION_LINK_SIZE = 'SET_CUSTOMIZATION_LINK_SIZE'
export const SET_CUSTOMIZATION_SITE_COLOR = 'SET_CUSTOMIZATION_SITE_COLOR'
export const SET_CUSTOMIZATION_BACKGROUND_PHOTO = 'SET_CUSTOMIZATION_BACKGROUND_PHOTO'
export const SET_AUTH_STATUS = 'SET_AUTH_STATUS'
export const SET_LOGGING = 'SET_LOGGING'

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

export function actionModalWindowBookmark(action) {
  // console.log(action);
  return { type: MODAL_WINDOW_BOOKMARK, action }
}

export function actionFormNewLink(action) {
  // console.log(action);
  return { type: FORM_NEW_LINK, action }
}

export function actionAddNewLink(action) {
  // console.log(action);
  return { type: ADD_NEW_LINK, action }
}

export function actionAddNewBookmark(action) {
  // console.log(action);
  return { type: NEW_BOOKMARK, action }
}

export function actionSetChromeBookmarks(action) {
  // console.log(action);
  return { type: SET_CHROME_BOOKMARKS, action }
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

export function actionSetCustomizationSiteBackground(action) {
  // console.log(action);
  return { type: SET_CUSTOMIZATION_BACKGROUND_PHOTO, action }
}

export function actionAuthStatus(action) {
  // console.log(action);
  return { type: SET_AUTH_STATUS, action }
}

export function actionLogging(action) {
  // console.log(action);
  return { type: SET_LOGGING, action }
}