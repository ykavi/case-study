import { EmployeeDetail } from '@components';
import client from '@lib';
import { GET_EMPLOYEE_DATA } from '@queries';

const Detail = ({ employeeData }) => <EmployeeDetail employeeData={employeeData} />;

export const getServerSideProps = async (ctx) => {
  const id = ctx?.query?.id;

  const { data } = await client.query({
    query: GET_EMPLOYEE_DATA,
    fetchPolicy: 'no-cache',
    variables: {
      id: id,
    },
  });

  return {
    props: {
      employeeData: data || {},
    },
  };
};

export default Detail;
