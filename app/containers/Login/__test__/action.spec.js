import { SAVE_USER_DB, SAVE_USER_DB_SUCCESS, SAVE_USER_DB_FAIL } from '../constants'
import { saveUserDb, saveUserDbSuccess, saveUserDbFail } from '../action'

describe('saveUserDb action', () => {
  it('should return SAVE_USER type', () => {
    let data;
    const expectedResult = {
      type: SAVE_USER_DB,
      data,
    };

    expect(saveUserDb(data)).toEqual(expectedResult)
  })
})

describe('saveUserDbSuccess action', () => {
  it('should return SAVE_USER_DB_SUCCESS type', () => {
    let data;
    const expectedResult = {
      type: SAVE_USER_DB_SUCCESS,
      data,
    };

    expect(saveUserDbSuccess(data)).toEqual(expectedResult)
  })
})

describe('saveUserDbFail action', () => {
  it('should return SAVE_USER_DB_FAIL type', () => {
    let error;
    const expectedResult = {
      type: SAVE_USER_DB_FAIL,
      error,
    };

    expect(saveUserDbFail(error)).toEqual(expectedResult)
  })
})
