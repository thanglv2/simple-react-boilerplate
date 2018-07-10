import {
  FETCH_RECOMMENDATIONS,
  FETCH_RECOMMENDATIONS_SUCCESS,
  FETCH_RECOMMENDATIONS_FAILURE,
} from '../constant'
import { fetchRecommendations, fetchRecommendationsSuccess, fetchRecommendationsFail } from '../action'

describe('recommendations action', () => {
  it('should return FETCH_RECOMMENDATIONS type', () => {
    let id;
    const expectedResult = {
      type: FETCH_RECOMMENDATIONS,
      id,
    }

    expect(fetchRecommendations(id)).toEqual(expectedResult)
  })

  it('should return FETCH_RECOMMENDATIONS_SUCCESS type', () => {
    let data;
    const expectedResult = {
      type: FETCH_RECOMMENDATIONS_SUCCESS,
      data,
    }

    expect(fetchRecommendationsSuccess(data)).toEqual(expectedResult)
  })

  it('should return FETCH_RECOMMENDATIONS_SUCCESS type', () => {
    let error;
    const expectedResult = {
      type: FETCH_RECOMMENDATIONS_FAILURE,
      error,
    }

    expect(fetchRecommendationsFail(error)).toEqual(expectedResult)
  })
})
