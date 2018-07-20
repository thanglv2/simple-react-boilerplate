import {
  FETCH_TRAILERS,
  FETCH_TRAILERS_SUCCESS,
  FETCH_TRAILERS_FAILURE,
} from './constants'

const initialState = {
  isFetching: false,
  items: [],
  error: {},
}

const trailerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRAILERS:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_TRAILERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.data,
      }
    case FETCH_TRAILERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    default:
      return state;
  }
}

export default trailerReducer
