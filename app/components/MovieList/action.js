import { FETCH_FILMS, FETCH_FILMS_SUCCESS, FETCH_FILMS_FAIL, SAVE_FILM, SAVE_FILM_SUCCESS, SAVE_FILM_FAIL, UPDATE_FILM, UPDATE_FILM_SUCCESS, UPDATE_FILM_FAIL } from './constants'

export function fetchFilms() {
  return {
    type: FETCH_FILMS,
  }
}

export function fetchFilmsSuccess(data) {
  return {
    type: FETCH_FILMS_SUCCESS,
    data,
  }
}

export function fetchFilmsFail(error) {
  return {
    type: FETCH_FILMS_FAIL,
    error,
  }
}

export function saveFilm(data) {
  return {
    type: SAVE_FILM,
    data,
  }
}

export function saveFilmSuccess(data) {
  return {
    type: SAVE_FILM_SUCCESS,
    data,
  }
}

export function saveFilmFail(error) {
  return {
    type: SAVE_FILM_FAIL,
    error,
  }
}

export function updateFilm(id, data) {
  return {
    type: UPDATE_FILM,
    id,
    data,
  }
}

export function updateFilmSuccess(data) {
  console.log(data)
  return {
    type: UPDATE_FILM_SUCCESS,
    data,
  }
}

export function updateFilmFail(error) {
  return {
    type: UPDATE_FILM_FAIL,
    error,
  }
}
