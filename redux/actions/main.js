import * as t from '../types';

export const setInfo = (name) => (dispatch) => {
  dispatch({
    type: t.SET_NAME,
    payload: name,
  });
};

export const setEmployee = (data) => (dispatch) => {
  dispatch({
    type: t.SET_EMPLOYEE,
    payload: data,
  });
};
