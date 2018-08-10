import { takeLatest, put, call } from 'redux-saga/effects';

import { FETCH_RECOMMENDATIONS } from './constant';
import { recommendationsApi } from './service'
import { fetchRecommendationsSuccess, fetchRecommendationsFail } from './action';

export function* fetchRecommendations(action) {
  try {
    const { id } = action;
    const response = yield call(recommendationsApi, id);
    yield put(fetchRecommendationsSuccess(response.data.results));
  } catch (err) {
    yield put(fetchRecommendationsFail(err));
  }
}

export function* watchFetchRecommendations() {
  yield takeLatest(FETCH_RECOMMENDATIONS, fetchRecommendations)
}
