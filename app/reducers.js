/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux'

import { movieList } from './containers/Home/reducer'
import locale from '../reducers/locale'
import { userDbReducer } from './containers/Login/reducer'
import fetchReducer from './components/ViewProfile/reducer'
import { filmReducer } from './containers/MovieList/reducer'
import { editUserReducer } from './components/UserForm/reducer'

const createReducer = asyncReducers =>
  combineReducers({
    movieList,
    locale,
    userDbReducer,
    fetchReducer,
    filmReducer,
    editUserReducer,
    ...asyncReducers,
  })

export default createReducer
