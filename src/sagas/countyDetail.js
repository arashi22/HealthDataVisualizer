import { AsyncStorage } from 'react-native';
import { fork, put, take, call, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../config/constants';
import api from '../utils/api';

export const getCountyDetail = function* getCounyDetail(action) {
  const { LOAD_COUNTY_DETAIL_SUCCESS, LOAD_COUNTY_DETAIL_FAILED } = ActionTypes;
  try {
    const result = yield call(() => api.getCountyDetail(action.id));
    yield put({type: LOAD_COUNTY_DETAIL_SUCCESS, result});
  } catch(error) {
    yield put({type: LOAD_COUNTY_DETAIL_FAILED, error});
  }
}

export const loadCountyDetail = function* loadCountyDetail() {
  const { LOAD_COUNTY_DETAIL } = ActionTypes;
    const watcher = yield takeLatest(LOAD_COUNTY_DETAIL, getCountyDetail);
}

export {loadCountyDetail as default}