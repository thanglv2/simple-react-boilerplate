import { FETCH_FILMS, FETCH_FILMS_SUCCESS, FETCH_FILMS_FAIL, SAVE_FILM, SAVE_FILM_SUCCESS, SAVE_FILM_FAIL, UPDATE_FILM, UPDATE_FILM_SUCCESS, UPDATE_FILM_FAIL } from './constants'

const initialState = {
  isFetching: false,
  items: [],
  error: {},
};

export function filmReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FILMS:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_FILMS_SUCCESS:
    return {
      ...state,
      isFetching: false,
      items: action.data,
    }
    case SAVE_FILM:
      return {
        ...state,
        isFetching: true,
        items: [...state.items, action.data]
      }
    case SAVE_FILM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: [...state.items, state.items.map(item => item.filmId === action.data.filmId ? action.data : item)]
      }
    case UPDATE_FILM:
      return {
        ...state,
        isFetching: true,
        items: state.items
      }
    case UPDATE_FILM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: state.items.map(item => item.filmId === action.data.filmId ? action.data : item)
      }
    case FETCH_FILMS_FAIL:
    case UPDATE_FILM_FAIL:
    case SAVE_FILM_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    default:
      return state
  }
}
