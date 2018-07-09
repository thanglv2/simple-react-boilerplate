import { FETCH_CASTS, FETCH_CASTS_SUCCESS, FETCH_CASTS_FAILURE } from './constant'

const initialState = {
  isFetching: false,
  items: [],
  error: {},
}

const castsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CASTS:
      return {
        ...state,
        isFetching: true,
      }

    case FETCH_CASTS_SUCCESS:
      return {
        ...state,
        items: action.data,
        isFetching: false,
      }
    case FETCH_CASTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    default:
      return state;
  }
}

export default castsReducer
