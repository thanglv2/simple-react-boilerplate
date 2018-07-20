import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  SEARCH_MOVIE,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_FAILURE,
  SORT_FILM,
  SORT_FILM_SUCCESS,
  SORT_FILM_FAILURE,
} from '../constants';
import {
  FILTER_FILM,
  FILTER_FILM_SUCCESS,
  FILTER_FILM_FAILURE,
} from '../../Filter/constants'
import { movieList } from '../reducer'

describe('movieList', () => {
  let state;
  it('should return initialState if there is no type of action provided', () => {
    const initialState = {
      isFetching: false,
      items: [],
      error: {},
    };

    expect(movieList(initialState, {})).toEqual(initialState)
  })

  it('should handle right type of action', () => {
    const action = {
      type: FILTER_FILM || FETCH_MOVIES || SEARCH_MOVIE || SORT_FILM,
    }

    expect(movieList(state, action).isFetching).toEqual(true)
  })

  it('should handle SUCCESS case', () => {
    const action = {
      type: FILTER_FILM_SUCCESS || FETCH_MOVIES_SUCCESS || SEARCH_MOVIE_SUCCESS || SORT_FILM_SUCCESS,
    }

    expect(movieList(state, action).isFetching).toEqual(false)
    expect(movieList(state, action).error).toEqual({})
  })

  it('should handle fail case', () => {
    let error;
    const action = {
      type: FILTER_FILM_FAILURE || FETCH_MOVIES_FAILURE || SEARCH_MOVIE_FAILURE || SORT_FILM_FAILURE,
      error,
    }

    expect(movieList(state, action).isFetching).toEqual(false)
    expect(movieList(state, action).error).toEqual(error)
  })
})
