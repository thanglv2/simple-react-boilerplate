import {
  FETCH_RECOMMENDATIONS,
  FETCH_RECOMMENDATIONS_SUCCESS,
  FETCH_RECOMMENDATIONS_FAILURE,
} from '../constant'
import reducer from '../reducer'

describe('recommendations reducer', () => {
  let state;
  const initialState = {
    isFetching: false,
    items: [],
    error: {},
  }

  it('should be return initialState when no type of action is provided', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  })

  it('should handle FETCH_RECOMMENDATIONS type of action', () => {
    const action = {
      type: FETCH_RECOMMENDATIONS,
    }

    expect(reducer(state, action).isFetching).toEqual(true)
  })

  it('should handle FETCH_RECOMMENDATIONS_SUCCESS type of action', () => {
    const action = {
      type: FETCH_RECOMMENDATIONS_SUCCESS,
    }

    expect(reducer(state, action).isFetching).toEqual(false)
    expect(reducer(state, action).error).toEqual({})
  })

  it('should handle FETCH_RECOMMENDATIONS_FAILURE type of action', () => {
    const error = {
      message: 'There is something wrong!',
    }
    const action = {
      type: FETCH_RECOMMENDATIONS_FAILURE,
      error,
    }

    expect(reducer(state, action).isFetching).toEqual(false)
    expect(reducer(state, action).error).toEqual(error)
  })
})
