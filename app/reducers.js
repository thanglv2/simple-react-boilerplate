/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux'

import globalReducer from 'containers/App/reducer'

const reducer = combineReducers({
  global: globalReducer,
})

export default reducer
