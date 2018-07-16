import { FETCH_FILMS, FETCH_FILMS_SUCCESS, FETCH_FILMS_FAIL, SAVE_FILM, SAVE_FILM_SUCCESS, SAVE_FILM_FAIL, UPDATE_FILM, UPDATE_FILM_SUCCESS, UPDATE_FILM_FAIL } from '../constants'
import { filmReducer } from '../reducer'

describe('filmReducer', () => {
  let state;
  it('should return initialState if there is no type of action provided', () => {
    const initialState = {
      isFetching: false,
      items: [],
      error: {},
    };

    expect(filmReducer(initialState, {})).toEqual(initialState)
  })

  it('should handle right type of action', () => {
    const action = {
      type: FETCH_FILMS || SAVE_FILM || UPDATE_FILM,
    }

    expect(filmReducer(state, action).isFetching).toEqual(true)
  })

  it('should handle FETCH_FILMS_SUCCESS', () => {
    const action = {
      type: FETCH_FILMS_SUCCESS,
    }

    expect(filmReducer(state, action).isFetching).toEqual(false)
    expect(filmReducer(state, action).error).toEqual({})
  })

  it('should handle SAVE_FILM_SUCCESS', () => {
    const action = {
      type: SAVE_FILM_SUCCESS,
    }

    expect(filmReducer(state, action).isFetching).toEqual(false)
    expect(filmReducer(state, action).error).toEqual({})
  })

  it('should handle UPDATE_FILM_SUCCESS', () => {
    const filmId = 123
    state = {
      items: [{
        filmId,
      }],
    }
    const action = {
      type: UPDATE_FILM_SUCCESS,
      data: {
        filmId: 123,
      },
    }

    expect(filmReducer(state, action).isFetching).toEqual(false)
    expect(filmReducer(state, action).items).toEqual([{ filmId: 123 }])
  })

  it('should handle UPDATE_FILM_SUCCESS', () => {
    const filmId = 123
    state = {
      items: [{
        filmId,
      }],
    }
    const action = {
      type: UPDATE_FILM_SUCCESS,
      data: {
        filmId: 456,
      },
    }

    expect(filmReducer(state, action).isFetching).toEqual(false)
    expect(filmReducer(state, action).items).toEqual([{ filmId: 123 }])
  })

  it('should handle fail case', () => {
    let error;
    const action = {
      type: FETCH_FILMS_FAIL || UPDATE_FILM_FAIL || SAVE_FILM_FAIL,
      error,
    }

    expect(filmReducer(state, action).isFetching).toEqual(false)
    expect(filmReducer(state, action).error).toEqual(error)
  })
})
