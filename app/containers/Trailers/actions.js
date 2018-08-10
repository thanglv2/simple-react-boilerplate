import {
  FETCH_TRAILERS,
  FETCH_TRAILERS_SUCCESS,
  FETCH_TRAILERS_FAILURE,
} from './constants'

export function fetchTrailers(id) {
  return {
    type: FETCH_TRAILERS,
    id,
  };
}

export function fetchTrailersSuccess(data) {
  return {
    type: FETCH_TRAILERS_SUCCESS,
    data,
  };
}

export function fetchTrailersFail(error) {
  return {
    type: FETCH_TRAILERS_FAILURE,
    error,
  };
}
