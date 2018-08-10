import { cloneableGenerator } from 'redux-saga/utils';
import { takeLatest, put, call } from 'redux-saga/effects';
import { filterApi } from '../service'
import { FILTER_FILM } from '../constants';
import { filterFilmSuccess, filterFilmFailure } from '../action';
import { filterFilm, watchFilterFilm } from '../saga'

describe('watchFilterFilm', () => {
  it('should watch searchMovie', () => {
    const gen = cloneableGenerator(watchFilterFilm)();

    expect(gen.next().value).toEqual(takeLatest(FILTER_FILM, filterFilm))
  })
})

describe('filterFilm', () => {
  let filter;
  const action = {
    filter,
  }
  const gen = cloneableGenerator(filterFilm)(action);

  it('should call api', () => {
    expect(gen.next().value).toEqual(call(filterApi, filter))
  })

  it('should put filterFilmSuccess', () => {
    const response = {
      data: {
        results: [],
      },
    }
    const clone = gen.clone();
    expect(clone.next(response).value).toEqual(put(filterFilmSuccess(response.data.results)))
  })

  it('should put filterFilmFailure', () => {
    const error = new Error('error');
    const clone = gen.clone();
    expect(clone.throw(error).value).toEqual(put(filterFilmFailure(error)))
  })
})
