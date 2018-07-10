import { FETCH_FILMS, FETCH_FILMS_SUCCESS, FETCH_FILMS_FAIL, SAVE_FILM, SAVE_FILM_SUCCESS, SAVE_FILM_FAIL, UPDATE_FILM, UPDATE_FILM_SUCCESS, UPDATE_FILM_FAIL } from './constants'

const initialState = {
  isFetching: false,
  items: [],
  error: {},
};

export function filmReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FILMS:
    case SAVE_FILM:
    case UPDATE_FILM:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_FILMS_SUCCESS:
    case SAVE_FILM_SUCCESS:
    case UPDATE_FILM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.data,
      }
    case FETCH_FILMS_FAIL:
    case SAVE_FILM_FAIL:
    case UPDATE_FILM_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    default:
      return state
  }
}
