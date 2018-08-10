import { UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL } from './constant'

export function updateUser(data) {
  return {
    type: UPDATE_USER,
    data,
  }
}

export function updateUserSucess(data) {
  return {
    type: UPDATE_USER_SUCCESS,
    data,
  }
}

export function updateUserFail(error) {
  return {
    type: UPDATE_USER_FAIL,
    error,
  }
}
