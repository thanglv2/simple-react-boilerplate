import { cloneableGenerator } from 'redux-saga/utils';
import { put, takeEvery, call } from 'redux-saga/effects';

import { fetchMovieDetail } from '../service';
import { watchFetchMovie, fetchMovie } from '../saga';
import { FETCH_MOVIE } from '../constants';
import { fetchMovieSuccess, fetchMovieFail } from '../actions';

describe('movieDetail Saga', () => {
  const gen = cloneableGenerator(watchFetchMovie)();

  it('should watch FETCH_MOVIE', () => {
    expect(gen.next().value).toEqual(takeEvery(FETCH_MOVIE, fetchMovie));
  });
})

describe('fetchMovie()', () => {
  const id = 1;
  const error = new Error('error');
  const action = { id };
  const response = {
    data: 'foo',
  };
  const gen = cloneableGenerator(fetchMovie)(action);

  it('should fetchMovie', () => {
    expect(gen.next().value).toEqual(call(fetchMovieDetail, id));
  })

  it('should put fetchMovieSuccess', () => {
    const clone = gen.clone();

    expect(clone.next(response).value).toEqual(put(fetchMovieSuccess(response.data)));
    expect(clone.next().done).toEqual(true);
  });

  it('should put fetchMovieFail', () => {
    const clone = gen.clone();

    expect(clone.throw(error).value).toEqual(put(fetchMovieFail(error)))
  })
})
