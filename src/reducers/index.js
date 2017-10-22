

/**
 * Combine all reducers in this file and export the combind reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux';
import counties from './counties';
import countyDetail from './countyDetail'

/**
 * Create the main reducer with the asynchronosly loaded ones
 */

export default function createReducer(navReducer) {
  return combineReducers({
    nav: navReducer,
    counties,
    countyDetail
  })
}