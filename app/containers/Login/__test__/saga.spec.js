import { takeLatest, put, call } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';

import { SAVE_USER_DB } from '../constants';
import { saveUserApi } from '../service'
import { saveUserDbSuccess, saveUserDbFail } from '../action';
import { saveUserDb, watchSaveUserDb } from '../saga'

describe('watchSaveUserDb', () => {
  const gen = cloneableGenerator(watchSaveUserDb)()
  it('should watch saveUserDb', () => {
    expect(gen.next().value).toEqual(takeLatest(SAVE_USER_DB, saveUserDb))
  })
})

describe('saveUserDb', () => {
  const action = {
    data: {},
  }
  const gen = cloneableGenerator(saveUserDb)(action);

  it('should call saveUserApi', () => {
    expect(gen.next().value).toEqual(call(saveUserApi, action.data))
  })

  it('should put saveUserDbSuccess', () => {
    const response = {
      data: {},
    }
    expect(gen.next(response).value).toEqual(put(saveUserDbSuccess(response.data)))
  })

  it('should put saveUserDbFail', () => {
    const error = new Error('error');
    const clone = gen.clone();
    expect(clone.throw(error).value).toEqual(put(saveUserDbFail(error)))
  })
})
