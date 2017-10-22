import {ActionTypes} from '../config/constants';
const {
	LOAD_COUNTY_DETAIL,
	LOAD_COUNTY_DETAIL_SUCCESS,
	LOAD_COUNTY_DETAIL_FAILED,
	SET_FAVORITE,
	SET_FAVORITE_SUCCESS,
	SET_FAVORITE_FAILED

} = ActionTypes;

var initialState = {
	countyDetail: null,
	loading: false,
	error: null
};

export default function countyDetail(state = initialState, action) {
	switch(action.type) {
		case LOAD_COUNTY_DETAIL:
			return {
				...state,
				loading: true,				
				error: null
			};
		case LOAD_COUNTY_DETAIL_SUCCESS:
			return {
				...state,
				loading: false,
				countyDetail: action.result
			};
		case LOAD_COUNTY_DETAIL_FAILED:
			return {
				...state,
				loading: false,
				error: action.error
			};	
		case SET_FAVORITE:
			return {
				...state,
				loading: true,
				error: null
			};
		case SET_FAVORITE_SUCCESS:
			return {
				...state,
				loading: false,
				countyDetail: action.result
			};
		case SET_FAVORITE_FAILED:
			return {
				...state,
				loading: false,
				error: action.error
			};
		default: 
			return state;
	}
	return state;
}