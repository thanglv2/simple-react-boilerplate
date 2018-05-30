/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux'

import globalReducer from 'containers/App/reducer'
import learningReducer from 'containers/Learning/reducer'

const reducer = combineReducers({
  learning: learningReducer,
  global: globalReducer,
})

export default reducer
