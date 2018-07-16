import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  LOCALE_SET,
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


export const localeSet = lang => {
  localStorage.setItem('lang', lang);
  return {
    type: LOCALE_SET,
    lang,
  }
}
