import { SAVE_USER_DB, SAVE_USER_DB_SUCCESS, SAVE_USER_DB_FAIL } from '../constants'
import { userDbReducer } from '../reducer'

describe('userDbReducer', () => {
  const initialState = {};
  let state;
  it('should return initialState if no type of action is provided', () => {
    expect(userDbReducer(initialState, {})).toEqual(initialState)
  })

  it('should handle SAVE_USER_DB type', () => {
    const action = {
      type: SAVE_USER_DB,
    }

    expect(userDbReducer(state, action).isFetching).toEqual(true)
  })

  it('should handle SAVE_USER_DB_SUCCESS type', () => {
    let data;
    const action = {
      type: SAVE_USER_DB_SUCCESS,
      data,
    }

    expect(userDbReducer(state, action).isFetching).toEqual(false)
    expect(userDbReducer(state, action).error).toEqual({})
  })

  it('should handle SAVE_USER_DB_FAIL type', () => {
    let error;
    const action = {
      type: SAVE_USER_DB_FAIL,
      error,
    }

    expect(userDbReducer(state, action).isFetching).toEqual(false)
    expect(userDbReducer(state, action).error).toEqual(error)
  })
})
