import {
  SIGN_OUT_SUCCESS
} from 'core/auth';

import {
  CREATE_TEAM_SUCCESS,
  DELETE_TEAM_SUCCESS,
  UPDATE_TEAM_SUCCESS,
  CLEAR_TEAM_STATE
} from './action-types';

export const initialState = {
	list: []
};

export function teamsReducer(state = initialState, action) {
	switch (action.type) {
		case CREATE_TEAM_SUCCESS:
			let list = [ action.payload, ...state.list ];
			return {list};

		case DELETE_TEAM_SUCCESS:
			return {
				list: state.list.filter(team => {
					return team.key !== action.payload.key;
				})
			};

		case CLEAR_TEAM_STATE:
			return initialState;

		default:
			return state;
	}
}