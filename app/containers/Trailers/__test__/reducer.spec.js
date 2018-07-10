import {
  FETCH_TRAILERS,
  FETCH_TRAILERS_SUCCESS,
  FETCH_TRAILERS_FAILURE,
} from '../constants'
import reducer from '../reducer'

describe('trailer reducer', () => {
  let state;
  const initialState = {
    isFetching: false,
    item: {},
    error: {},
  };

  it('should return initialState if no type of action is provided', () => {
    expect(reducer(initialState, {})).toEqual(initialState)
  });

  it('should handle FETCH_TRAILERS action', () => {
    const action = {
      type: FETCH_TRAILERS,
    };

    expect(reducer(state, action).isFetching).toEqual(true)
  })

  it('should handle FETCH_TRAILERS_SUCCESS action', () => {
    const data = {};
    const action = {
      type: FETCH_TRAILERS_SUCCESS,
      data,
    };

    expect(reducer(state, action).isFetching).toEqual(false)
    expect(reducer(state, action).error).toEqual({})
  });

  it('should handle FETCH_TRAILERS_FAILURE action', () => {
    const error = { message: 'there is something wrong!' }
    const action = {
      type: FETCH_TRAILERS_FAILURE,
      error,
    };

    expect(reducer(state, action).isFetching).toEqual(false)
    expect(reducer(state, action).error).toEqual(error)
  });
})
