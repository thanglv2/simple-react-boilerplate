import { takeLatest, put, call } from 'redux-saga/effects';

import { FETCH_MOVIES } from './constants';
import { fetchMoviesSuccess, fetchMoviesFail } from './actions';
import { fetchMovieList } from './service';

export function* fetchMovies() {
  try {
    const response = yield call(fetchMovieList);

    yield put(fetchMoviesSuccess(response.data.results));
  } catch (err) {
    yield put(fetchMoviesFail(err));
  }
}

export function* watchFetchMovies() {
  yield takeLatest(FETCH_MOVIES, fetchMovies)
}
