import { FETCH_CASTS, FETCH_CASTS_SUCCESS, FETCH_CASTS_FAILURE } from './constant'

export const fetchCasts = (movieId) => ({
  type: FETCH_CASTS,
  movieId,
})

export const fetchCastsSuccess = data => ({
  type: FETCH_CASTS_SUCCESS,
  data,
})

export const fetchCastsFail = error => ({
  type: FETCH_CASTS_FAILURE,
  error,
})
