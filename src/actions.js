// actions

export const ICONS_ACTIONS_TOGGLE = 'ICONS_ACTIONS_TOGGLE'
export const CUSTOMIZATION_ASIDE_TOGGLE = 'CUSTOMIZATION_ASIDE_TOGGLE'
export const FILL_TABLE_OF_VISITED_SITES = 'FILL_TABLE_OF_VISITED_SITES'
export const FILL_JUVENTUS = 'FILL_JUVENTUS'
export const FILL_WEATHER = 'FILL_WEATHER'

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