import { FILTER_FILM, FILTER_FILM_SUCCESS, FILTER_FILM_FAILURE } from '../constants'
import { filterFilm, filterFilmSuccess, filterFilmFailure } from '../action'

describe('casts action', () => {
  it('should return FILTER_FILM type', () => {
    const expectedResult = {
      type: FILTER_FILM,
    }

    expect(filterFilm()).toEqual(expectedResult)
  })

  it('should return FILTER_FILM_SUCCESS type', () => {
    let data;
    const expectedResult = {
      type: FILTER_FILM_SUCCESS,
      data,
    }

    expect(filterFilmSuccess(data)).toEqual(expectedResult)
  })

  it('should return FILTER_FILM_FAILURE type', () => {
    let error;
    const expectedResult = {
      type: FILTER_FILM_FAILURE,
      error,
    }

    expect(filterFilmFailure(error)).toEqual(expectedResult)
  })
})
