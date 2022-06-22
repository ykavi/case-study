import { EmployeeCard } from '@components';

const EmployeeList = ({ employeeData }) => {
  return (
    <>
      {employeeData?.map((employee) => (
        <EmployeeCard employee={employee} key={employee.id} />
      ))}
    </>
  );
};

export default EmployeeList;
