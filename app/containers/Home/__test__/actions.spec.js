import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  LOCALE_SET,
} from '../constants';
import { fetchMovies, fetchMoviesSuccess, fetchMoviesFail, localeSet } from '../actions'

describe('home action', () => {
  describe('fetchMovies', () => {
    it('should return FETCH_MOVIES', () => {
      const expectedResult = {
        type: FETCH_MOVIES,
      }
      expect(fetchMovies()).toEqual(expectedResult)
    })
  })

  describe('fetchMoviesSuccess', () => {
    it('should return FETCH_MOVIES_SUCCESS', () => {
      let data;
      const expectedResult = {
        type: FETCH_MOVIES_SUCCESS,
        data,
      }
      expect(fetchMoviesSuccess(data)).toEqual(expectedResult)
    })
  })

  describe('fetchMoviesFail', () => {
    it('should return FETCH_MOVIES_FAILURE', () => {
      let error;
      const expectedResult = {
        type: FETCH_MOVIES_FAILURE,
        error,
      }
      expect(fetchMoviesFail(error)).toEqual(expectedResult)
    })
  })

  describe('localeSet', () => {
    it('should return LOCALE_SET type', () => {
      let lang;
      const expectedResult = {
        type: LOCALE_SET,
        lang,
      }

      expect(localeSet(lang)).toEqual(expectedResult);
    })
  })
})
