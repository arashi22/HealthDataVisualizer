import immutable from 'object-path-immutable';
import { ActionTypes } from '../config/constants';

const {
	LOAD_COUNTIES,
	LOAD_COUNTIES_SUCCESS,
	LOAD_COUNTIES_FAILED,
	SET_FAVORITE
} = ActionTypes;

var initialState = {
	counties: { Counties: [] },
	loading: false,
	error: null
};

export default function counties(state = initialState, action) {
	switch(action.type) {
		case LOAD_COUNTIES:
			return {
				...state,
				loading: true,				
				error: null
			};
		case LOAD_COUNTIES_SUCCESS:
			return {
				...state,
				loading: false,
				counties: action.result
			};
		case LOAD_COUNTIES_FAILED:
			return {
				...state,
				loading: false,
				error: action.error
			};
		case SET_FAVORITE:
			const newState = immutable.set(state, ['counties', action.payload.id - 1, 'isFavorite'], action.payload.isFavorite)
			console.log(newState)
			return {
				...newState,
				loading: false,
			}
		default: 
			return state;
	}
	return state;
}