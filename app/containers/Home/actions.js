import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from './constants';

export function fetchMovies() {
  return {
    type: FETCH_MOVIES,
  };
}
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
