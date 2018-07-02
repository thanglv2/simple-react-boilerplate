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
} from './constants';

import {
  FILTER_FILM,
  FILTER_FILM_SUCCESS,
  FILTER_FILM_FAILURE,
} from '../Filter/constants'

const initialState = {
  isFetching: false,
  items: [],
  error: {},
};

export function movieList(state = initialState, action) {
  switch (action.type) {
    case FILTER_FILM:
    case FETCH_MOVIES:
    case SEARCH_MOVIE:
    case SORT_FILM:
      return {
        ...state,
        isFetching: true,
      }
    case FILTER_FILM_SUCCESS:
    case FETCH_MOVIES_SUCCESS:
    case SEARCH_MOVIE_SUCCESS:
    case SORT_FILM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.data,
      }
    case FILTER_FILM_FAILURE:
    case FETCH_MOVIES_FAILURE:
    case SEARCH_MOVIE_FAILURE:
    case SORT_FILM_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    default:
      return state
  }
}
