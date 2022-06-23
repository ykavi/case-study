import { EmployeeList } from '@components';
import client from '@lib';
import { GET_INITIAL_DATA } from '@queries';
import { setEmployee } from '../redux/actions/main';
import { useDispatch } from 'react-redux';

const Home = ({ initialData }) => {
  const dispatch = useDispatch();
  dispatch(setEmployee(initialData?.company?.employees));

  return <EmployeeList />;
};

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: GET_INITIAL_DATA,
    fetchPolicy: 'no-cache',
  });

  return {
    props: {
      initialData: data || {},
    },
  };
};

export default Home;
