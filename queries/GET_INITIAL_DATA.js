import { gql } from '@apollo/client';

export const GET_INITIAL_DATA = gql`
  query {
    company {
      id
      industry
      name
      employees {
        id
        imageUrl
        firstName
        company {
          name
        }
        lastName
        jobTitle
        rate
        employeeDetail {
          id
          phone
          address
          eMail
        }
      }
    }
  }
`;
