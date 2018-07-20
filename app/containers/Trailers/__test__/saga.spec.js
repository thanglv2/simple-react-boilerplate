import { cloneableGenerator } from 'redux-saga/utils';
import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_TRAILERS } from '../constants';
import { fetchTrailerList } from '../service'
import { fetchTrailersSuccess, fetchTrailersFail } from '../actions';
import { fetchTrailers, watchFetchTrailers } from '../saga'

describe('watchFetchTrailers', () => {
  it('should watch searchMovie', () => {
    const gen = cloneableGenerator(watchFetchTrailers)();

    expect(gen.next().value).toEqual(takeLatest(FETCH_TRAILERS, fetchTrailers))
  })
})

describe('fetchTrailers', () => {
  let id;
  const action = {
    id,
  }
  const gen = cloneableGenerator(fetchTrailers)(action);

  it('should call api', () => {
    expect(gen.next().value).toEqual(call(fetchTrailerList, id))
  })

  it('should put fetchTrailersSuccess', () => {
    const response = {
      data: {
        results: [],
      },
    }
    const clone = gen.clone();
    expect(clone.next(response).value).toEqual(put(fetchTrailersSuccess(response.data.results)))
  })

  it('should put fetchTrailersFail', () => {
    const error = new Error('error');
    const clone = gen.clone();
    expect(clone.throw(error).value).toEqual(put(fetchTrailersFail(error)))
  })
})
