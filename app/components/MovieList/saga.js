import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_FILMS } from './constants';
import { fetchFilmsSuccess, fetchFilmsFail } from './action';
import { getFilmsApi } from './service';

export function* fetchFilms() {
  try {
    const response = yield call(getFilmsApi);
    yield put(fetchFilmsSuccess(response.data));
  } catch (err) {
    yield put(fetchFilmsFail(err));
  }
}

export function* watchFetchFilms() {
  yield takeEvery(FETCH_FILMS, fetchFilms)
}
