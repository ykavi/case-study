import { EmployeeDetailCard } from '@components';

const EmployeeDetail = ({ employeeData }) => <EmployeeDetailCard detail={employeeData?.employee?.employeeDetail} />;

export default EmployeeDetail;
