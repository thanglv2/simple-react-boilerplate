import { takeLatest, put, call } from 'redux-saga/effects';

import { FETCH_TRAILERS } from './constants';
import { fetchTrailerList } from './service'
import { fetchTrailersSuccess, fetchTrailersFail } from './actions';

export function* fetchTrailers(action) {
  try {
    const { id } = action;
    const response = yield call(fetchTrailerList, id);
    yield put(fetchTrailersSuccess(response.data.results));
  } catch (err) {
    yield put(fetchTrailersFail(err));
  }
}

export function* watchFetchTrailers() {
  yield takeLatest(FETCH_TRAILERS, fetchTrailers)
}
