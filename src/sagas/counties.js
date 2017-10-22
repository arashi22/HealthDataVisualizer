import { AsyncStorage } from 'react-native';
import { fork, put, take, call, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../config/constants';
import api from '../utils/api';

export const getCounties = function* getCounties() {
  const { LOAD_COUNTIES_SUCCESS, LOAD_COUNTIES_FAILED } = ActionTypes;
  try {
    const result = yield call(api.getCounties);
    yield put({type: LOAD_COUNTIES_SUCCESS, result});
  } catch(error) {
    yield put({type: LOAD_COUNTIES_FAILED, error});
  }
}

export const loadCounties = function* loadCounties() {
  const { LOAD_COUNTIES } = ActionTypes;
  const watcher = yield takeLatest(LOAD_COUNTIES, getCounties);  
}

export const updateCounty = function* updateCounty(action) {
  const { SET_FAVORITE_SUCCESS, SET_FAVORITE_FAILED } = ActionTypes;
  try {
    const result = yield call(() => api.setFavorite(action.id));
    yield put({type: SET_FAVORITE_SUCCESS, result});
  } catch(error) {
    yield put({type: SET_FAVORITE_FAILED, error});
  }
}

export const setFavorite = function* setFavorite() {
  const { SET_FAVORITE } = ActionTypes;
  const watcher = yield takeLatest(SET_FAVORITE, updateCounty);
}

export {loadCounties as default}