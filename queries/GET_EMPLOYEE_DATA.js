import { gql } from '@apollo/client';

export const GET_EMPLOYEE_DATA = gql`
  query employee {
    employee {
      id
      lastName
      employeeDetail {
        address
        eMail
        phone
      }
    }
  }
`;
