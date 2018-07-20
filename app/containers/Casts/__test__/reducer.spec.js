import { FETCH_CASTS, FETCH_CASTS_SUCCESS, FETCH_CASTS_FAILURE } from '../constant'
import reducer from '../reducer'

describe('casts reducer', () => {
  let state;
  const initialState = {
    isFetching: false,
    item: {},
    error: {},
  };

  it('should return initialState if no type of action is provided', () => {
    expect(reducer(initialState, {})).toEqual(initialState)
  });

  it('should handle FETCH_CASTS action', () => {
    const action = {
      type: FETCH_CASTS,
    };

    expect(reducer(state, action).isFetching).toEqual(true)
  })

  it('should handle FETCH_CASTS_SUCCESS action', () => {
    const data = {};
    const action = {
      type: FETCH_CASTS_SUCCESS,
      data,
    };

    expect(reducer(state, action).isFetching).toEqual(false)
    expect(reducer(state, action).error).toEqual({})
  });

  it('should handle FETCH_CASTS_FAILURE action', () => {
    const error = { message: 'there is something wrong!' }
    const action = {
      type: FETCH_CASTS_FAILURE,
      error,
    };

    expect(reducer(state, action).isFetching).toEqual(false)
    expect(reducer(state, action).error).toEqual(error)
  });
})
