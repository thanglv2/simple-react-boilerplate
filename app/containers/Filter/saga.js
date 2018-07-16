import { takeLatest, put, call } from 'redux-saga/effects';

import { filterApi } from './service'
import { FILTER_FILM } from './constants';
import { filterFilmSuccess, filterFilmFailure } from './action';

export function* filterFilm(action) {
  try {
    const { filter } = action;
    const response = yield call(filterApi, filter);
    yield put(filterFilmSuccess(response.data.results));
  } catch (err) {
    yield put(filterFilmFailure(err));
  }
}

export function* watchFilterFilm() {
  yield takeLatest(FILTER_FILM, filterFilm)
}
