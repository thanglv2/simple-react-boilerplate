/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux'

import { movieList } from 'containers/Home/reducer'
import locale from '../reducers/locale'

const createReducer = asyncReducers =>
  combineReducers({
    movieList,
    locale,
    ...asyncReducers,
  })

export default createReducer
