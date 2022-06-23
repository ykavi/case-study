import { EmployeeList } from '@components';
import client from '@lib';
import { GET_INITIAL_DATA } from '@queries';

const Home = ({ initialData }) => <EmployeeList initialData={initialData?.company} />;

export const getStaticProps = async () => {
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
