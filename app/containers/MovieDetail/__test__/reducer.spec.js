import { FETCH_MOVIE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE } from '../constants';
import reducer from '../reducer'

describe('movieDetail reducer', () => {
  let state;
  const initialState = {
    isFetching: false,
    item: {},
    error: {},
  };

  it('should return initialState if no type of action is provided', () => {
    expect(reducer(initialState, {})).toEqual(initialState)
  });

  it('should handle FETCH_MOVIE action', () => {
    const action = {
      type: FETCH_MOVIE,
    };

    expect(reducer(state, action).isFetching).toEqual(true)
  })

  it('should handle FETCH_MOVIE_SUCCESS action', () => {
    const data = {};
    const action = {
      type: FETCH_MOVIE_SUCCESS,
      data,
    };

    expect(reducer(state, action).isFetching).toEqual(false)
    expect(reducer(state, action).error).toEqual({})
  });

  it('should handle FETCH_MOVIE_FAILURE action', () => {
    const error = { message: 'there is something wrong!' }
    const action = {
      type: FETCH_MOVIE_FAILURE,
      error,
    };

    expect(reducer(state, action).isFetching).toEqual(false)
    expect(reducer(state, action).error).toEqual(error)
  });
})
