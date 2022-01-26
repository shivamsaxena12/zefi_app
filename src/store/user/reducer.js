import * as ActionTypes from './actionTypes';

const initialState = {
  userData: {},
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };

    default:
      return state;
  }
}
