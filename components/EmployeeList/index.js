import { EmployeeCard } from '@components';
import { useEffect, useState } from 'react';

const EmployeeList = ({ companyData, setEmployee, employeesData }) => {
  useEffect(() => {
    setEmployee(companyData);
  }, [companyData]);

  console.log('list');

  return (
    <>
      {employeesData?.map((employee) => (
        <EmployeeCard employee={employee} key={employee.id} setEmployee={setEmployee} employeesData={employeesData} />
      ))}
    </>
  );
};

export default EmployeeList;
