import { cloneableGenerator } from 'redux-saga/utils';
import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_CASTS } from '../constant';
import { fetchCastsApi } from '../service'
import { fetchCastsSuccess, fetchCastsFail } from '../action';
import { fetchCasts, watchFetchCasts } from '../saga'

describe('watchFetchCasts', () => {
  it('should watch searchMovie', () => {
    const gen = cloneableGenerator(watchFetchCasts)();

    expect(gen.next().value).toEqual(takeLatest(FETCH_CASTS, fetchCasts))
  })
})

describe('fetchCasts', () => {
  let movieId;
  const action = {
    movieId,
  }
  const gen = cloneableGenerator(fetchCasts)(action);

  it('should call api', () => {
    expect(gen.next().value).toEqual(call(fetchCastsApi, movieId))
  })

  it('should put fetchCastsSuccess', () => {
    const response = {
      data: {
        cast: [],
      },
    }
    const clone = gen.clone();
    expect(clone.next(response).value).toEqual(put(fetchCastsSuccess(response.data.cast)))
  })

  it('should put fetchCastsFail', () => {
    const error = new Error('error');
    const clone = gen.clone();
    expect(clone.throw(error).value).toEqual(put(fetchCastsFail(error)))
  })
})
