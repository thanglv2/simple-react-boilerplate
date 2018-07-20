import createReducer from '../reducers';
import { combineReducers } from 'redux'

import { movieList } from '../containers/Home/reducer'
import locale from '../../reducers/locale'
import { userReducer } from '../containers/Login/reducer'

describe(createReducer(), () => {
  it('should return combineReducers', () => {
    let asyncReducers;
    const rootReducer = combineReducers({
      movieList,
      locale,
      userReducer,
      ...asyncReducers,
    })
    expect(JSON.stringify(createReducer(asyncReducers))).toEqual(JSON.stringify(rootReducer));
  })
})
