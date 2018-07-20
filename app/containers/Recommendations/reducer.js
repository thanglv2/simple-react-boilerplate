import {
  FETCH_RECOMMENDATIONS,
  FETCH_RECOMMENDATIONS_SUCCESS,
  FETCH_RECOMMENDATIONS_FAILURE,
} from './constant'

const initialState = {
  isFetching: false,
  items: [],
  error: {},
}

const recommendationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECOMMENDATIONS:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_RECOMMENDATIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.data,
      }
    case FETCH_RECOMMENDATIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    default:
      return state;
  }
}

export default recommendationReducer
