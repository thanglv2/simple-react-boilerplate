import { SET_USER_NAME } from './constants'

export function setUsername(username) {
  return {
    type: SET_USER_NAME,
    username,
  }
}
