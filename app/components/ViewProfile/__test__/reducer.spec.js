import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAIL } from '../constant'
import reducer from '../reducer'

describe('view profile reducer', () => {
  let state;
  const initialState = {
    isFetching: false,
    items: [],
    error: {},
  }
  it('should return initialState if there is no type of action provided', () => {
    expect(reducer(initialState, {})).toEqual(initialState)
  })

  it('should handle FETCH_USER type', () => {
    const action = {
      type: FETCH_USER,
    }
    expect(reducer(state, action).isFetching).toEqual(true)
  })

  it('should handle FETCH_USER_SUCCESS type', () => {
    let data;
    const action = {
      type: FETCH_USER_SUCCESS,
      data,
    }
    expect(reducer(state, action).isFetching).toEqual(false)
    expect(reducer(state, action).error).toEqual({})
  })

  it('should handle FETCH_USER_FAIL type', () => {
    let error;
    const action = {
      type: FETCH_USER_FAIL,
      error,
    }
    expect(reducer(state, action).isFetching).toEqual(false)
    expect(reducer(state, action).error).toEqual(error)
  })
})
