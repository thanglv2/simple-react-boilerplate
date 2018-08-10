import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAIL } from '../constant'
import { fetchUser, fetchUserSuccess, fetchUserFail } from '../action'

describe('user profile action', () => {
  it('should return FETCH_USER type', () => {
    const expectedResult = {
      type: FETCH_USER,
    }

    expect(fetchUser()).toEqual(expectedResult)
  })

  it('should return FETCH_USER_SUCCESS type', () => {
    let data;
    const expectedResult = {
      type: FETCH_USER_SUCCESS,
      data,
    }

    expect(fetchUserSuccess(data)).toEqual(expectedResult)
  })

  it('should return FETCH_USER_FAIL type', () => {
    let error;
    const expectedResult = {
      type: FETCH_USER_FAIL,
      error,
    }

    expect(fetchUserFail(error)).toEqual(expectedResult)
  })
})
