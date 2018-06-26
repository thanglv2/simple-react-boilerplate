import { all } from 'redux-saga/effects';

import { watchFetchMovies } from '../app/containers/Home/saga';
import { watchFetchMovie } from '../app/containers/MovieDetail/saga';

export default function* rootSaga() {
  yield all([watchFetchMovies(), watchFetchMovie()]);
}
