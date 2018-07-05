import { SAVE_USER } from './constants'

const initialState = {}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        payload: action.payload,
      }
    default:
      return state;
  }
}

export default userReducer
