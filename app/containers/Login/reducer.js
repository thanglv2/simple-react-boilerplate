import { SAVE_USER_DB, SAVE_USER_DB_SUCCESS, SAVE_USER_DB_FAIL } from './constants'

const init = {
  isFetching: false,
  items: [],
  error: {},
}

export function userDbReducer(state = init, action) {
  switch (action.type) {
    case SAVE_USER_DB:
      return {
        ...state,
        isFetching: true,
      }
    case SAVE_USER_DB_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.data,
      }
    case SAVE_USER_DB_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    default:
      return state
  }
}

