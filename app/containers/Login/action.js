import { SAVE_USER } from './constants'

export function saveUser(payload) {
  return {
    type: SAVE_USER,
    payload,
  }
}
