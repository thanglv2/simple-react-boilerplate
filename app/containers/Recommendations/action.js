import {
  FETCH_RECOMMENDATIONS,
  FETCH_RECOMMENDATIONS_SUCCESS,
  FETCH_RECOMMENDATIONS_FAILURE,
} from './constant'

export function fetchRecommendations(id) {
  return {
    type: FETCH_RECOMMENDATIONS,
    id,
  };
}

export function fetchRecommendationsSuccess(data) {
  return {
    type: FETCH_RECOMMENDATIONS_SUCCESS,
    data,
  };
}

export function fetchRecommendationsFail(error) {
  return {
    type: FETCH_RECOMMENDATIONS_FAILURE,
    error,
  };
}
