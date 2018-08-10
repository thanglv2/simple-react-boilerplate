import { takeLatest, put, call } from 'redux-saga/effects';

import { FETCH_CASTS } from './constant';
import { fetchCastsApi } from './service'
import { fetchCastsSuccess, fetchCastsFail } from './action';

export function* fetchCasts(action) {
  try {
    const { movieId } = action;
    const response = yield call(fetchCastsApi, movieId);
    yield put(fetchCastsSuccess(response.data.cast));
  } catch (err) {
    yield put(fetchCastsFail(err));
  }
}

export function* watchFetchCasts() {
  yield takeLatest(FETCH_CASTS, fetchCasts)
}
