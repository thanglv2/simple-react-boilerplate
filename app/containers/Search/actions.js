import { SEARCH_MOVIE, SEARCH_MOVIE_SUCCESS, SEARCH_MOVIE_FAILURE } from './constants';

export function searchMovie(searchText) {
  return {
    type: SEARCH_MOVIE,
    searchText,
  };
}

export function searchMovieSuccess(data, searchText) {
  return {
    type: SEARCH_MOVIE_SUCCESS,
    data,
    searchText,
  };
}

export function searchMovieFail(error) {
  return {
    type: SEARCH_MOVIE_FAILURE,
    error,
  };
}
