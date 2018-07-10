import { takeEvery, put, call } from 'redux-saga/effects';

import { FETCH_MOVIE } from './constants';
import { fetchMovieDetail } from './service';
import { fetchMovieSuccess, fetchMovieFail } from './actions';

export function* fetchMovie(action) {
  try {
    const { id } = action;
    const response = yield call(fetchMovieDetail, id);
    yield put(fetchMovieSuccess(response.data));
  } catch (err) {
    yield put(fetchMovieFail(err));
  }
}

export function* watchFetchMovie() {
  yield takeEvery(FETCH_MOVIE, fetchMovie)
}
