import { takeLatest, put, call } from 'redux-saga/effects';

import { SEARCH_MOVIE } from './constants';
import { searchMovieApi } from './service';
import { searchMovieSuccess, searchMovieFail } from './actions';

export function* searchMovie(action) {
  try {
    const { searchText } = action;
    const response = yield call(searchMovieApi, searchText);
    yield put(searchMovieSuccess(response.data.results));
  } catch (err) {
    yield put(searchMovieFail(err));
  }
}

export function* watchSearchMovie() {
  yield takeLatest(SEARCH_MOVIE, searchMovie)
}
