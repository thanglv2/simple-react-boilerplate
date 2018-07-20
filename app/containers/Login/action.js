import { SAVE_USER_DB, SAVE_USER_DB_SUCCESS, SAVE_USER_DB_FAIL } from './constants'

export function saveUserDb(data) {
  return {
    type: SAVE_USER_DB,
    data,
  }
}
export function saveUserDbSuccess(data) {
  return {
    type: SAVE_USER_DB_SUCCESS,
    data,
  }
}

export function saveUserDbFail(error) {
  return {
    type: SAVE_USER_DB_FAIL,
    error,
  }
}
