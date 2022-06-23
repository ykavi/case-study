import { EmployeeCard } from '@components';
import { useSelector } from 'react-redux';

const EmployeeList = ({}) => {
  const employeesData = useSelector((store) => store.main.employeesData);

  return (
    <>
      {employeesData?.map((employee) => (
        <EmployeeCard employee={employee} key={employee.id} />
      ))}
    </>
  );
};

export default EmployeeList;
