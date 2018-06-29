import { all } from 'redux-saga/effects';

import { watchFetchMovies } from '../app/containers/Home/saga';
import { watchFetchMovie } from '../app/containers/MovieDetail/saga';
import { watchSearchMovie } from '../app/containers/Search/saga';
import { watchSortFilm } from '../app/containers/SortBy/saga'

export default function* rootSaga() {
  yield all([watchFetchMovies(), watchFetchMovie(), watchSearchMovie(), watchSortFilm()]);
}
