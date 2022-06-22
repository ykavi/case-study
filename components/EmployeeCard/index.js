import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/employee.module.scss';

const getFullName = (firsName, lastName) => `${firsName} ${lastName}`;

const EmployeeCard = ({ employee }) => {
  const cardRoute = `/detail/${employee?.id}`;
  console.log(employee);
  return (
    <div className={styles.container}>
      <Image src={employee?.imageUrl} alt={employee?.firstName} width="150px" height="150px" />

      <div className={styles.content}>
        <div>
          <p>
            <b>{getFullName(employee?.firstName, employee?.lastName)}</b>
          </p>
          <p className={styles.jobTitle}>{employee?.jobTitle}</p>
          <p className={styles.jobTitle}>{employee?.company?.name}</p>
        </div>

        <Link href={cardRoute}>
          <a className={styles.detailText}>Detail</a>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeCard;
