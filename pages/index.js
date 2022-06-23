import { EmployeeList } from '@components';
import client from '@lib';
import { GET_INITIAL_DATA } from '@queries';

const Home = ({ companyData }) => <EmployeeList companyData={companyData?.company?.employees} />;

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: GET_INITIAL_DATA,
    fetchPolicy: 'no-cache',
  });

  return {
    props: {
      companyData: data || {},
    },
  };
};

export default Home;
