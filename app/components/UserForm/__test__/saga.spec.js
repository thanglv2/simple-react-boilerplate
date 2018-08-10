import { takeLatest, put, call } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { UPDATE_USER } from '../constant';
import { updateUserApi } from '../service'
import { updateUserSucess, updateUserFail } from '../action';
import { updateUser, watchUpdateUser } from '../saga'

describe('watchUpdateUser()', () => {
  it('should watch fetchUser', () => {
    const gen = cloneableGenerator(watchUpdateUser)();
    expect(gen.next().value).toEqual(takeLatest(UPDATE_USER, updateUser))
  })
})

describe('updateUser()', () => {
  const action = {
    data: {},
  }
  const gen = cloneableGenerator(updateUser)(action);
  it('should call updateUserApi', () => {
    expect(gen.next().value).toEqual(call(updateUserApi, action.data))
  })
  it('should put updateUserSucess', () => {
    const response = {
      data: {},
    }
    const clone = gen.clone();
    expect(clone.next(response).value).toEqual(put(updateUserSucess(response.data)))
  })
  it('should put updateUserFail', () => {
    const error = new Error('error')
    const clone = gen.clone();
    expect(clone.throw(error).value).toEqual(put(updateUserFail(error)))
  })
})
