import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_FILMS, SAVE_FILM, UPDATE_FILM } from './constants';
import { fetchFilmsSuccess, fetchFilmsFail, saveFilmSuccess, saveFilmFail, updateFilmSuccess, updateFilmFail } from './action';
import { getFilmsApi, saveFilmApi, updateFilmApi } from './service';

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

export function* saveFilm(action) {
  try {
    const { data } = action
    const response = yield call(saveFilmApi, data);
    yield put(saveFilmSuccess(response.data));
  } catch (err) {
    yield put(saveFilmFail(err));
  }
}

export function* watchSaveFilm() {
  yield takeEvery(SAVE_FILM, saveFilm)
}

export function* updateFilm(action) {
  try {
    const { id, data } = action;
    const response = yield call(updateFilmApi, id, data);
    yield put(updateFilmSuccess(response.data));
  } catch (err) {
    yield put(updateFilmFail(err));
  }
}

export function* watchUpdateFilm() {
  yield takeEvery(UPDATE_FILM, updateFilm)
}
