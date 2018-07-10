import { takeEvery, put, call } from 'redux-saga/effects';
import { SAVE_FILM, UPDATE_FILM } from './constants';
import { saveFilmSuccess, saveFilmFail, updateFilmSuccess, updateFilmFail } from './action';
import { saveFilmApi, updateFilmApi } from './service';


export function* saveFilm(action) {
  try {
    const { data } = action;
    const response = yield call(saveFilmApi, data)
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
    const response = yield call(updateFilmApi, id, data)
    yield put(updateFilmSuccess(response.data));
  } catch (err) {
    yield put(updateFilmFail(err));
  }
}

export function* watchUpdateFilm() {
  yield takeEvery(UPDATE_FILM, updateFilm)
}
