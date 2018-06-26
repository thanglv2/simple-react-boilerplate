/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux'

import { movieList } from 'containers/Home/reducer'

const createReducer = asyncReducers =>
  combineReducers({
    movieList,
    ...asyncReducers,
  })

export default createReducer
