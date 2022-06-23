import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/employee.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setEmployee } from '../../redux/actions/main';
import { getIndexById } from '@utils';

const getFullName = (firsName, lastName) => `${firsName} ${lastName}`;

const EmployeeCard = ({ employee }) => {
  const dispatch = useDispatch();
  const cardRoute = `/detail/${employee?.id}`;

  const employeesData = useSelector((store) => store.main.employeesData);

  const increaseOnClick = (id) => {
    const data = [...employeesData];
    const index = getIndexById(id, employeesData);
    data[index].rate = ++data[index].rate;

    dispatch(setEmployee(data));
  };

  const decreaseOnClick = (id) => {
    const data = [...employeesData];
    const index = getIndexById(id, employeesData);
    data[index].rate = --data[index].rate;

    dispatch(setEmployee(data));
  };

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

      <div className={styles.voteContainer}>
        <span className={styles.increase} onClick={() => increaseOnClick(employee?.id)}>
          +
        </span>
        <span className={styles.voteText}>{employee?.rate}</span>
        <span className={styles.decrease} onClick={() => decreaseOnClick(employee?.id)}>
          -
        </span>
      </div>
    </div>
  );
};

export default EmployeeCard;
