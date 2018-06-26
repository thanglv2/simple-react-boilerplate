import { FETCH_MOVIE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE } from './constants';

export function fetchMovie(id) {
  return {
    type: FETCH_MOVIE,
    id,
  };
}

export function fetchMovieSuccess(data) {
  return {
    type: FETCH_MOVIE_SUCCESS,
    data,
  };
}

export function fetchMovieFail(error) {
  return {
    type: FETCH_MOVIE_FAILURE,
    error,
  };
}

