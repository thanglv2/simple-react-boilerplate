import { SET_KEYWORD } from './constants'

const initState = {
  keyword: '',
}

export default (state = initState, action) => {
  switch (action.type) {
    case SET_KEYWORD:
      return { ...state, keyword: action.keyword }
    default:
      return state
  }
}
