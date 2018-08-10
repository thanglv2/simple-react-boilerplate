import { FETCH_CASTS, FETCH_CASTS_SUCCESS, FETCH_CASTS_FAILURE } from '../constant'
import { fetchCasts, fetchCastsSuccess, fetchCastsFail } from '../action'

describe('casts action', () => {
  it('should return FETCH_CASTS type', () => {
    const expectedResult = {
      type: FETCH_CASTS,
    }

    expect(fetchCasts()).toEqual(expectedResult)
  })

  it('should return FETCH_CASTS_SUCCESS type', () => {
    let data;
    const expectedResult = {
      type: FETCH_CASTS_SUCCESS,
      data,
    }

    expect(fetchCastsSuccess(data)).toEqual(expectedResult)
  })

  it('should return FETCH_CASTS_FAILURE type', () => {
    let error;
    const expectedResult = {
      type: FETCH_CASTS_FAILURE,
      error,
    }

    expect(fetchCastsFail(error)).toEqual(expectedResult)
  })
})
