import * as t from '../types';

const main = (
  state = {
    name: 'guest',
    employeesData: [],
  },
  action,
) => {
  switch (action.type) {
    case t.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case t.SET_EMPLOYEE:
      return {
        ...state,
        employeesData: action.payload,
      };
    default:
      return { ...state };
  }
};

export default main;
