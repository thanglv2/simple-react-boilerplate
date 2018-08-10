import { cloneableGenerator } from 'redux-saga/utils';
import { takeLatest, put, call } from 'redux-saga/effects';

import { FETCH_MOVIES } from '../constants';
import { fetchMoviesSuccess, fetchMoviesFail } from '../actions';
import { fetchMovieList } from '../service';
import { fetchMovies, watchFetchMovies } from '../saga'

describe('movieDetail Saga', () => {
  const gen = cloneableGenerator(watchFetchMovies)();

  it('should watch FETCH_MOVIE', () => {
    expect(gen.next().value).toEqual(takeLatest(FETCH_MOVIES, fetchMovies));
  });
})

describe('fetchMovie()', () => {
  const gen = cloneableGenerator(fetchMovies)();

  it('should fetchMovie', () => {
    expect(gen.next().value).toEqual(call(fetchMovieList));
  })

  it('should put fetchMoviesSuccess', () => {
    const response = {
      data: {
        results: [],
      },
    }

    expect(gen.next(response).value).toEqual(put(fetchMoviesSuccess(response.data.results)));
  });

  it('should put fetchMoviesFail', () => {
    const clone = gen.clone();
    const error = new Error('error');
    expect(clone.throw(error).value).toEqual(put(fetchMoviesFail(error)))
  })
})
