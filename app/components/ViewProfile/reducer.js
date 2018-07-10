import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAIL } from './constant'

const initialState = {
  isFetching: false,
  items: [],
  error: {},
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
    console.log('reducer fetchuser')
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.data,
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
