import { FETCH_MOVIE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE } from '../constants'
import { fetchMovie, fetchMovieSuccess, fetchMovieFail } from '../actions'

describe('movie detail actions', () => {
  it('should return FETCH_MOVIE type', () => {
    let id;
    const expectedResult = {
      type: FETCH_MOVIE,
      id,
    };

    expect(fetchMovie(id)).toEqual(expectedResult);
  })

  it('should return FETCH_MOVIE_SUCCESS type', () => {
    let data;
    const expectedResult = {
      type: FETCH_MOVIE_SUCCESS,
      data,
    };

    expect(fetchMovieSuccess(data)).toEqual(expectedResult);
  })

  it('should return FETCH_MOVIE_FAILURE type', () => {
    let error;
    const expectedResult = {
      type: FETCH_MOVIE_FAILURE,
      error,
    };

    expect(fetchMovieFail(error)).toEqual(expectedResult);
  })
})
