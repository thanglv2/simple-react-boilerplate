import { SORT_FILM, SORT_FILM_SUCCESS, SORT_FILM_FAILURE } from './constants'

export const sortFilm = (sortBy) => ({
  type: SORT_FILM,
  sortBy,
});

export const sortFilmSuccess = (data, sortBy) => ({
  type: SORT_FILM_SUCCESS,
  data,
  sortBy,
});

export const sortFilmFailure = (error) => ({
  type: SORT_FILM_FAILURE,
  error,
});
