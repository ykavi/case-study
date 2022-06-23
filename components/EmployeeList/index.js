import { EmployeeCard } from '@components';
import { useSelector, useDispatch } from 'react-redux';
import { setEmployee } from '../../redux/actions/main';

const EmployeeList = ({ companyData }) => {
  const dispatch = useDispatch();
  dispatch(setEmployee(companyData));

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
