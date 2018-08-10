import { cloneableGenerator } from 'redux-saga/utils';
import { takeLatest, put, call } from 'redux-saga/effects';
import { sortApi } from '../service'
import { SORT_FILM } from '../constants';
import { sortFilmSuccess, sortFilmFailure } from '../action';
import { sortFilm, watchSortFilm } from '../saga'

describe('watchSortFilm', () => {
  it('should watch searchMovie', () => {
    const gen = cloneableGenerator(watchSortFilm)();

    expect(gen.next().value).toEqual(takeLatest(SORT_FILM, sortFilm))
  })
})

describe('sortFilm', () => {
  let sortBy;
  const action = {
    sortBy,
  }
  const gen = cloneableGenerator(sortFilm)(action);

  it('should call api', () => {
    expect(gen.next().value).toEqual(call(sortApi, sortBy))
  })

  it('should put sortFilmSuccess', () => {
    const response = {
      data: {
        results: [],
      },
    }
    const clone = gen.clone();
    expect(clone.next(response).value).toEqual(put(sortFilmSuccess(response.data.results)))
  })

  it('should put sortFilmFailure', () => {
    const error = new Error('error');
    const clone = gen.clone();
    expect(clone.throw(error).value).toEqual(put(sortFilmFailure(error)))
  })
})
