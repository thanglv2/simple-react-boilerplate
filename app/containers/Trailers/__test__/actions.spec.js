import {
  FETCH_TRAILERS,
  FETCH_TRAILERS_SUCCESS,
  FETCH_TRAILERS_FAILURE,
} from '../constants'
import { fetchTrailers, fetchTrailersSuccess, fetchTrailersFail } from '../actions'

describe('trailer movie actions', () => {
  it('should return FETCH_TRAILERS type', () => {
    let id;
    const expectedResult = {
      type: FETCH_TRAILERS,
      id,
    }

    expect(fetchTrailers(id)).toEqual(expectedResult)
  })

  it('should return FETCH_TRAILERS_SUCCESS type', () => {
    let data;
    const expectedResult = {
      type: FETCH_TRAILERS_SUCCESS,
      data,
    }

    expect(fetchTrailersSuccess(data)).toEqual(expectedResult)
  })

  it('should return FETCH_TRAILERS_FAILURE type', () => {
    let error;
    const expectedResult = {
      type: FETCH_TRAILERS_FAILURE,
      error,
    }

    expect(fetchTrailersFail(error)).toEqual(expectedResult)
  })
})
