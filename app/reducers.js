/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux'

import { movieList } from 'containers/Home/reducer'
import locale from '../reducers/locale'
import userReducer from './containers/Login/reducer'

const createReducer = asyncReducers =>
  combineReducers({
    movieList,
    locale,
    userReducer,
    ...asyncReducers,
  })

export default createReducer
