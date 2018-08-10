import { UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL } from './constant'

const initialState = {
  isUpdating: false,
  user: {},
  error: {},
}

export function editUserReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        isUpdating: true,
      }
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        user: action.data,
      }
    case UPDATE_USER_FAIL:
      return {
        ...state,
        isUpdating: false,
        error: action.error,
      }
    default:
      return state;
  }
}
