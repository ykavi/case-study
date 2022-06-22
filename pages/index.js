import { EmployeeCard, EmployeeList } from '@components';
import client from '@lib';
import { gql } from '@apollo/client';

const Home = ({ companyData }) => (
  <>
    <EmployeeList employeeData={companyData?.company?.employees} />
  </>
);

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
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
    `,
  });
  console.log(data);
  return {
    props: {
      companyData: data,
    },
  };
}
export default Home;
