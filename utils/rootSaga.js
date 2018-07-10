import { all } from 'redux-saga/effects';

import { watchFetchMovies } from '../app/containers/Home/saga';
import { watchFetchMovie } from '../app/containers/MovieDetail/saga';
import { watchSearchMovie } from '../app/containers/Search/saga';
import { watchSortFilm } from '../app/containers/SortBy/saga'
import { watchFilterFilm } from '../app/containers/Filter/saga'
import { watchFetchTrailers } from '../app/containers/Trailers/saga'
import { watchFetchCasts } from '../app/containers/Casts/saga'
import { watchFetchRecommendations } from '../app/containers/Recommendations/saga'
import { watchFetchFilms } from '../app/components/MovieList/saga'
import { watchFetchUser } from '../app/components/ViewProfile/saga'
import { watchSaveUserDb } from '../app/containers/Login/saga'

export default function* rootSaga() {
  yield all([
    watchFetchMovies(),
    watchFetchMovie(),
    watchSearchMovie(),
    watchSortFilm(),
    watchFilterFilm(),
    watchFetchTrailers(),
    watchFetchCasts(),
    watchFetchRecommendations(),
    watchFetchFilms(),
    watchFetchUser(),
    watchSaveUserDb(),
  ]);
}
