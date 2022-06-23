import * as t from '../types';

export const setEmployee = (data) => (dispatch) => {
  dispatch({
    type: t.SET_EMPLOYEE,
    payload: data,
  });
};
