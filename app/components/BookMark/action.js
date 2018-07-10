import { SAVE_FILM, SAVE_FILM_SUCCESS, SAVE_FILM_FAIL, UPDATE_FILM, UPDATE_FILM_SUCCESS, UPDATE_FILM_FAIL } from './constants'

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
