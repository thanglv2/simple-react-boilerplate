import { SEARCH_MOVIE, SEARCH_MOVIE_SUCCESS, SEARCH_MOVIE_FAILURE } from '../constants';
import { searchMovie, searchMovieSuccess, searchMovieFail } from '../actions'

describe('search movie actions', () => {
  it('should return SEARCH_MOVIE type', () => {
    let searchText;
    const expectedResult = {
      type: SEARCH_MOVIE,
      searchText,
    }

    expect(searchMovie(searchText)).toEqual(expectedResult)
  })

  it('should return SEARCH_MOVIE_SUCCESS type', () => {
    let searchText;
    let data;
    const expectedResult = {
      type: SEARCH_MOVIE_SUCCESS,
      searchText,
      data,
    }

    expect(searchMovieSuccess(data, searchText)).toEqual(expectedResult)
  })

  it('should return SEARCH_MOVIE_FAILURE type', () => {
    let error;
    const expectedResult = {
      type: SEARCH_MOVIE_FAILURE,
      error,
    }

    expect(searchMovieFail(error)).toEqual(expectedResult)
  })
})
