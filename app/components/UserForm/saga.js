import { takeLatest, put, call } from 'redux-saga/effects';
import { UPDATE_USER } from './constant';
import { updateUserApi } from './service'
import { updateUserSucess, updateUserFail } from './action';

export function* updateUser(action) {
  try {
    const { data } = action;
    const response = yield call(updateUserApi, data);
    yield put(updateUserSucess(response.data));
  } catch (err) {
    yield put(updateUserFail(err));
  }
}

export function* watchUpdateUser() {
  yield takeLatest(UPDATE_USER, updateUser)
}
