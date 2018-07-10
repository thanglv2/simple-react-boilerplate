import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAIL } from './constant'

export function fetchUser() {
  return {
    type: FETCH_USER,
  }
}

export function fetchUserSuccess(data) {
  return {
    type: FETCH_USER_SUCCESS,
    data,
  }
}

export function fetchUserFail(error) {
  return {
    type: FETCH_USER_FAIL,
    error,
  }
}
