import { cloneableGenerator } from 'redux-saga/utils';
import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_FILMS, SAVE_FILM, UPDATE_FILM } from '../constants';
import { fetchFilmsSuccess, fetchFilmsFail, saveFilmSuccess, saveFilmFail, updateFilmSuccess, updateFilmFail } from '../action';
import { getFilmsApi, saveFilmApi, updateFilmApi } from '../service';
import { fetchFilms, watchFetchFilms, saveFilm, watchSaveFilm, updateFilm, watchUpdateFilm } from '../saga'

describe('watchFetchFilms()', () => {
  const gen = cloneableGenerator(watchFetchFilms)();
  it('should watch fetchFilms', () => {
    expect(gen.next().value).toEqual(takeEvery(FETCH_FILMS, fetchFilms))
  })
})

describe('fetchFilms()', () => {
  const gen = cloneableGenerator(fetchFilms)();
  it('should call getFilmsApi', () => {
    expect(gen.next().value).toEqual(call(getFilmsApi))
  })
  it('should put fetchFilmsSuccess', () => {
    const response = {
      data: {},
    }
    expect(gen.next(response).value).toEqual(put(fetchFilmsSuccess(response.data)))
  })
  it('should put fetchFilmsFail', () => {
    const error = new Error('error')
    const clone = gen.clone();
    expect(clone.throw(error).value).toEqual(put(fetchFilmsFail(error)))
  })
})

describe('watchSaveFilm()', () => {
  const gen = cloneableGenerator(watchSaveFilm)();
  it('should watch fetchFilms', () => {
    expect(gen.next().value).toEqual(takeEvery(SAVE_FILM, saveFilm))
  })
})

describe('saveFilm()', () => {
  const action = {
    data: {},
  }
  const gen = cloneableGenerator(saveFilm)(action);
  it('should call getFilmsApi', () => {
    expect(gen.next().value).toEqual(call(saveFilmApi, action.data))
  })
  it('should put saveFilmSuccess', () => {
    const response = {
      data: {},
    }
    expect(gen.next(response).value).toEqual(put(saveFilmSuccess(response.data)))
  })
  it('should put saveFilmFail', () => {
    const error = new Error('error')
    const clone = gen.clone();
    expect(clone.throw(error).value).toEqual(put(saveFilmFail(error)))
  })
})

describe('watchUpdateFilm()', () => {
  const gen = cloneableGenerator(watchUpdateFilm)();
  it('should watch fetchFilms', () => {
    expect(gen.next().value).toEqual(takeEvery(UPDATE_FILM, updateFilm))
  })
})

describe('updateFilm()', () => {
  const action = {
    data: {},
    id: 1234,
  }
  const gen = cloneableGenerator(updateFilm)(action);
  it('should call getFilmsApi', () => {
    expect(gen.next().value).toEqual(call(updateFilmApi, action.id, action.data))
  })
  it('should put updateFilmSuccess', () => {
    const response = {
      data: {},
    }
    expect(gen.next(response).value).toEqual(put(updateFilmSuccess(response.data)))
  })
  it('should put updateFilmFail', () => {
    const error = new Error('error')
    const clone = gen.clone();
    expect(clone.throw(error).value).toEqual(put(updateFilmFail(error)))
  })
})
