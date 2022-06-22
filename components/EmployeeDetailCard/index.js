import styles from './styles/employee.module.scss';

const EmployeeDetailCard = ({ detail }) => {
  console.log(detail);
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        <b>Addres: </b>
        {detail?.address}
      </p>
      <p className={styles.text}>
        <b>E-Mail: </b>
        {detail?.eMail}
      </p>
      <p className={styles.text}>
        <b>Phone: </b>
        {detail?.phone}
      </p>
    </div>
  );
};

export default EmployeeDetailCard;
