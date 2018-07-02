import { takeLatest, put, call } from 'redux-saga/effects';

import sortApi from './service'
import { SORT_FILM } from './constants';
import { sortFilmSuccess, sortFilmFailure } from './action';

export function* sortFilm(action) {
  try {
    const { sortBy } = action;
    const response = yield call(sortApi, sortBy);
    yield put(sortFilmSuccess(response.data.results));
  } catch (err) {
    yield put(sortFilmFailure(err));
  }
}

export function* watchSortFilm() {
  yield takeLatest(SORT_FILM, sortFilm)
}
