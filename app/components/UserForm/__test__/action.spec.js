import { UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL } from '../constant'
import { updateUser, updateUserSucess, updateUserFail } from '../action'

describe('updateUser', () => {
  it('should return UPDATE_USER type', () => {
    let data;
    const expectedResult = {
      type: UPDATE_USER,
      data,
    }

    expect(updateUser(data)).toEqual(expectedResult)
  })
})

describe('updateUserSucess', () => {
  it('should return UPDATE_USER_SUCCESS type', () => {
    let data;
    const expectedResult = {
      type: UPDATE_USER_SUCCESS,
      data,
    }

    expect(updateUserSucess(data)).toEqual(expectedResult)
  })
})

describe('updateUserFail', () => {
  it('should return UPDATE_USER_FAIL type', () => {
    let error;
    const expectedResult = {
      type: UPDATE_USER_FAIL,
      error,
    }

    expect(updateUserFail(error)).toEqual(expectedResult)
  })
})
