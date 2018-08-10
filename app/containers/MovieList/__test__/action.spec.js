import { FETCH_FILMS, FETCH_FILMS_SUCCESS, FETCH_FILMS_FAIL, SAVE_FILM, SAVE_FILM_SUCCESS, SAVE_FILM_FAIL, UPDATE_FILM, UPDATE_FILM_SUCCESS, UPDATE_FILM_FAIL } from '../constants'
import {
  fetchFilms, fetchFilmsSuccess, fetchFilmsFail,
  saveFilm, saveFilmSuccess, saveFilmFail,
  updateFilm, updateFilmSuccess, updateFilmFail,
} from '../action'

describe('fetchFilms()', () => {
  it('should return FETCH_FILMS type', () => {
    const expectedResult = {
      type: FETCH_FILMS,
    }

    expect(fetchFilms()).toEqual(expectedResult)
  })
})

describe('fetchFilmsSuccess()', () => {
  it('should return FETCH_FILMS_SUCCESS type', () => {
    let data;
    const expectedResult = {
      type: FETCH_FILMS_SUCCESS,
      data,
    }

    expect(fetchFilmsSuccess(data)).toEqual(expectedResult)
  })
})

describe('fetchFilmsFail()', () => {
  it('should return FETCH_FILMS_FAIL type', () => {
    let error;
    const expectedResult = {
      type: FETCH_FILMS_FAIL,
      error,
    }

    expect(fetchFilmsFail(error)).toEqual(expectedResult)
  })
})

describe('saveFilm()', () => {
  it('should return SAVE_FILM type', () => {
    let data;
    const expectedResult = {
      type: SAVE_FILM,
      data,
    }

    expect(saveFilm(data)).toEqual(expectedResult)
  })
})

describe('saveFilmSuccess()', () => {
  it('should return SAVE_FILM_SUCCESS type', () => {
    let data;
    const expectedResult = {
      type: SAVE_FILM_SUCCESS,
      data,
    }

    expect(saveFilmSuccess(data)).toEqual(expectedResult)
  })
})

describe('saveFilmFail()', () => {
  it('should return SAVE_FILM_FAIL type', () => {
    let error;
    const expectedResult = {
      type: SAVE_FILM_FAIL,
      error,
    }

    expect(saveFilmFail(error)).toEqual(expectedResult)
  })
})

describe('updateFilm()', () => {
  it('should return UPDATE_FILM type', () => {
    let data;
    let id;
    const expectedResult = {
      type: UPDATE_FILM,
      id,
      data,
    }

    expect(updateFilm(id, data)).toEqual(expectedResult)
  })
})

describe('updateFilmSuccess()', () => {
  it('should return UPDATE_FILM_SUCCESS type', () => {
    let data;
    const expectedResult = {
      type: UPDATE_FILM_SUCCESS,
      data,
    }

    expect(updateFilmSuccess(data)).toEqual(expectedResult)
  })
})

describe('updateFilmFail()', () => {
  it('should return UPDATE_FILM_FAIL type', () => {
    let error;
    const expectedResult = {
      type: UPDATE_FILM_FAIL,
      error,
    }

    expect(updateFilmFail(error)).toEqual(expectedResult)
  })
})
