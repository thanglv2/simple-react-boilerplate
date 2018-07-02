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

const LOCALE_SET = 'LOCALE_SET'

export const localeSet = lang => ({
  type: LOCALE_SET,
  lang,
});

// export const setLocale = lang => dispatch => {
//   console.log('action, //////')
//   localStorage.alhubLang = lang;
//   dispatch(localeSet(lang));
// };
