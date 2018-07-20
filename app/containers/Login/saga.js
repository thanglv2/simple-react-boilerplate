import { takeLatest, put, call } from 'redux-saga/effects';

import { SAVE_USER_DB } from './constants';
import { saveUserApi } from './service'
import { saveUserDbSuccess, saveUserDbFail } from './action';

export function* saveUserDb(action) {
  try {
    const { data } = action;
    const response = yield call(saveUserApi, data);
    yield put(saveUserDbSuccess(response.data));
  } catch (err) {
    yield put(saveUserDbFail(err));
  }
}

export function* watchSaveUserDb() {
  yield takeLatest(SAVE_USER_DB, saveUserDb)
}
