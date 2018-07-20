import { takeEvery, put, call } from 'redux-saga/effects';

import { FETCH_MOVIE } from '../../components/Poster/constants';
import { fetchMovieDetail } from '../../components/Poster/service';
import { fetchMovieSuccess, fetchMovieFail } from '../../components/Poster/actions';

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
