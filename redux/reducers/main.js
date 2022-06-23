import * as t from '../types';
import { shortingByVote } from '@utils';

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
        employeesData: action.payload.sort(shortingByVote),
      };
    default:
      return { ...state };
  }
};

export default main;
