import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { EmployeeDetailCard } from '@components';
import { GET_EMPLOYEE_DATA } from '@queries';

const EmployeeDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, loading, error } = useQuery(GET_EMPLOYEE_DATA, {
    variables: {
      id: id,
    },
  });

  if (loading) <p>Loading...</p>;
  if (error || !data) return null;

  const { employeeDetail } = data?.employee || {};

  return <EmployeeDetailCard detail={employeeDetail} />;
};

export default EmployeeDetail;
