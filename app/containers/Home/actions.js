import {
  API_KEY,
  URL_LIST,
  URL_DETAIL,
  FETCH_MOVIE,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from './constants';

export function fetchMoviesSuccess(data) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    data,
  };
}

export function fetchMoviesFail(error) {
  return {
    type: FETCH_MOVIES_FAILURE,
    error,
  };
}
