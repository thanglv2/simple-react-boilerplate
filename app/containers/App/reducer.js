import { SET_USER_NAME } from './constants'

const initState = {
  username: '',
}

export default (state = initState, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return { ...state, username: action.username }
    default:
      return state
  }
}
