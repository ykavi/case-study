import { useQuery, gql } from '@apollo/client';
import { EmployeeDetailCard } from '@components';

const QUERY = gql`
  query employee {
    employee(id: "ODY3OTA1Njk2Ng==") {
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

const EmployeeDetail = () => {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) <p>Loading...</p>;
  if (error || !data) return null;

  const { employeeDetail } = data?.employee || {};

  return <EmployeeDetailCard detail={employeeDetail} />;
};

export default EmployeeDetail;
