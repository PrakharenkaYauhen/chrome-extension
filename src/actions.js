// actions

export const FILL_TABLE_OF_VISITED_SITES = 'FILL_TABLE_OF_VISITED_SITES'
export const FILL_WEATHER = 'FILL_WEATHER'

export function actionFillTableOfVisitedSites(action) {
  console.log(action);
  return { type: FILL_TABLE_OF_VISITED_SITES, action }
}

export function actionFillWeather(action) {
  // console.log(action);
  return { type: FILL_WEATHER, action }
}