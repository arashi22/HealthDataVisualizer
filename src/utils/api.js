import { API_Config } from '../config/constants';
import ApiUtils from './apiUtils'

const utils = {
  getCounties: () => {
    return fetch(API_Config.baseUrl + 'counties/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(ApiUtils.checkStatus)
    .then((response) => response.json());
  },
  getCountyDetail: (id) => {
    return fetch(API_Config.baseUrl + `countyDetail/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(ApiUtils.checkStatus)
    .then((response) => response.json());
  },
  // setFavorite: (id) => {
  //   return fetch(API_Config.baseUrl + `countyDetail/${id}/?isFavorite=true`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(ApiUtils.checkStatus)
  //   .then((response) => response.json());
  // }
};

export default utils;