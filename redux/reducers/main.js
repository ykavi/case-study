import * as t from '../types';
import { sortByVote } from '@utils';

const main = (
  state = {
    employeesData: [],
  },
  action,
) => {
  switch (action.type) {
    case t.SET_EMPLOYEE:
      return {
        ...state,
        employeesData: action.payload.sort(sortByVote),
      };
    default:
      return { ...state };
  }
};

export default main;
