import { FILTER_FILM, FILTER_FILM_SUCCESS, FILTER_FILM_FAILURE } from './constants'

export const filterFilm = (filter) => ({
  type: FILTER_FILM,
  filter,
});

export const filterFilmSuccess = (data, filter) => ({
  type: FILTER_FILM_SUCCESS,
  data,
  filter,
});

export const filterFilmFailure = (error) => ({
  type: FILTER_FILM_FAILURE,
  error,
});
