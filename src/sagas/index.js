import { fork } from 'redux-saga/effects';
import loadCounties, { setFavorite } from './counties';
import loadCountyDetail from './countyDetail';

//// rootSaga

const rootSaga = function* rootSaga() {
  yield [
    fork(loadCounties),
    fork(loadCountyDetail),
    fork(setFavorite)
  ];
}

export { rootSaga as default }