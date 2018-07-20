import { SORT_FILM, SORT_FILM_SUCCESS, SORT_FILM_FAILURE } from '../constants'
import { sortFilm, sortFilmSuccess, sortFilmFailure } from '../action'

describe('sort movie actions', () => {
  it('should return SORT_FILM type', () => {
    let sortBy;
    const expectedResult = {
      type: SORT_FILM,
      sortBy,
    }

    expect(sortFilm(sortBy)).toEqual(expectedResult)
  })

  it('should return SORT_FILM_SUCCESS type', () => {
    let sortBy;
    let data;
    const expectedResult = {
      type: SORT_FILM_SUCCESS,
      sortBy,
      data,
    }

    expect(sortFilmSuccess(data, sortBy)).toEqual(expectedResult)
  })

  it('should return SORT_FILM_FAILURE type', () => {
    let error;
    const expectedResult = {
      type: SORT_FILM_FAILURE,
      error,
    }

    expect(sortFilmFailure(error)).toEqual(expectedResult)
  })
})
