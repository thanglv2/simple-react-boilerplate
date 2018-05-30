import { SET_KEYWORD } from './constants'

export function setKeyword(keyword) {
  return {
    type: SET_KEYWORD,
    keyword,
  }
}
