import { ActionTypes } from '../config/constants';

const { 
  LOAD_COUNTIES,
  LOAD_COUNTIES_SUCCESS,
  LOAD_COUNTIES_FAILED,
  LOAD_COUNTY_DETAIL,
  LOAD_COUNTY_DETAIL_SUCCESS,
  LOAD_COUNTY_DETAIL_FAILED,
  SET_FAVORITE,
} = ActionTypes;

export function loadCounties() {  
  return {
    type: LOAD_COUNTIES
  }
}

export function loadingCountiesSuccess(counties) {
  return {
    type: LOAD_COUNTIES_SUCCESS,
    counties,
  }
}

export function loadCountiesError(error) {  
  return {
    type: LOAD_COUNTIES_FAILED,
    error,
  }
}

export function loadCountyDetail(id) {  
  return {
    type: LOAD_COUNTY_DETAIL,
    id
  }
}

export function loadingCountyDetailSuccess(counties) {
  return {
    type: LOAD_COUNTY_DETAIL_SUCCESS,
    counties,
  }
}

export function loadCountyDetailError(error) {  
  return {
    type: LOAD_COUNTY_DETAIL_FAILED,
    error,
  }
}

export function setFavorite(payload) {
  return {
    type: SET_FAVORITE,
    payload
  }
}

export function setFavoriteSuccess(counties) {
  return {
    type: SET_FAVORITE_SUCESS,
    counties,
  }
}

export function setFavoriteError(error) {  
  return {
    type: SET_FAVORITE_FAILED,
    error,
  }
}