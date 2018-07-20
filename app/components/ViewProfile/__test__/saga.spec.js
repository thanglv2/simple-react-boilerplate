import { takeLatest, put, call } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { FETCH_USER } from '../constant';
import { fetchUserApi } from '../service'
import { fetchUserSuccess, fetchUserFail } from '../action';
import { watchFetchUser, fetchUser } from '../saga'

describe('watchFetchUser()', () => {
  it('should watch fetchUser', () => {
    const gen = cloneableGenerator(watchFetchUser)();
    expect(gen.next().value).toEqual(takeLatest(FETCH_USER, fetchUser))
  })
})

describe('fetchUser()', () => {
  const gen = cloneableGenerator(fetchUser)();
  it('should call fetchUserApi', () => {
    expect(gen.next().value).toEqual(call(fetchUserApi))
  })
  it('should put fetchUserSuccess', () => {
    const response = {
      data: {},
    }
    const clone = gen.clone();
    expect(clone.next(response).value).toEqual(put(fetchUserSuccess(response.data)))
  })
  it('should put fetchUserFail', () => {
    const error = new Error('error')
    const clone = gen.clone();
    expect(clone.throw(error).value).toEqual(put(fetchUserFail(error)))
  })
})
