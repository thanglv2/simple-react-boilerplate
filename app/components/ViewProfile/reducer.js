import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAIL } from './constant'

const initialState = {
  isFetching: false,
  user: {},
  error: {},
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.data,
      }
    case FETCH_USER_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    default:
      return state;
  }
}
