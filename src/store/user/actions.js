import * as ActionTypes from './actionTypes';

export const setUserData = data => dispatch => {
  dispatch({
    type: ActionTypes.SET_USER_DATA,
    payload: data,
  });
};
