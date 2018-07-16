import { UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL } from '../constant'
import { editUserReducer } from '../reducer'

describe('editUserReducer', () => {
  let state;
  it('should return initialState if there is no type of action provided', () => {
    const initialState = {
      isUpdating: false,
      user: {},
      error: {},
    }

    expect(editUserReducer(initialState, {})).toEqual(initialState)
  })

  it('should handle type UPDATE_USER', () => {
    const action = {
      type: UPDATE_USER,
    }
    expect(editUserReducer(state, action).isUpdating).toEqual(true)
  })

  it('should handle type UPDATE_USER_SUCCESS', () => {
    const action = {
      type: UPDATE_USER_SUCCESS,
    }
    expect(editUserReducer(state, action).isUpdating).toEqual(false)
    expect(editUserReducer(state, action).error).toEqual({})
  })

  it('should handle type UPDATE_USER_FAIL', () => {
    let error;
    const action = {
      type: UPDATE_USER_FAIL,
      error,
    }
    expect(editUserReducer(state, action).isUpdating).toEqual(false)
    expect(editUserReducer(state, action).error).toEqual(error)
  })
})
