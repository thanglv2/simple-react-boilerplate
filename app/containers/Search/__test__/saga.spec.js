import { cloneableGenerator } from 'redux-saga/utils';
import { takeLatest, put, call } from 'redux-saga/effects';
import { SEARCH_MOVIE } from '../constants';
import { searchMovieApi } from '../service';
import { searchMovieSuccess, searchMovieFail } from '../actions';
import { searchMovie, watchSearchMovie } from '../saga'

describe('watchSearchMovie', () => {
  it('should watch searchMovie', () => {
    const gen = cloneableGenerator(watchSearchMovie)();

    expect(gen.next().value).toEqual(takeLatest(SEARCH_MOVIE, searchMovie))
  })
})

describe('searchMovie', () => {
  let searchText;
  const action = {
    searchText,
  }
  const gen = cloneableGenerator(searchMovie)(action);

  it('should call api', () => {
    expect(gen.next().value).toEqual(call(searchMovieApi, searchText))
  })

  it('should put searchMovieSuccess', () => {
    const response = {
      data: {
        results: [],
      },
    }
    const clone = gen.clone();
    expect(clone.next(response).value).toEqual(put(searchMovieSuccess(response.data.results)))
  })

  it('should put searchMovieFail', () => {
    const error = new Error('error');
    const clone = gen.clone();
    expect(clone.throw(error).value).toEqual(put(searchMovieFail(error)))
  })
})
