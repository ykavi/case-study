import { EmployeeCard } from '@components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setEmployee } from '../../redux/actions/main';

const EmployeeList = ({ companyData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setEmployee(companyData));
  }, [companyData]);

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
