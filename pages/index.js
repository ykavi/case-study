import { EmployeeList } from '@components';
import client from '@lib';
import { connect } from 'react-redux';
import { setInfo, setEmployee } from '../redux/actions/main';
import { GET_INITIAL_DATA } from '@queries';

const Home = ({ companyData, ...rest }) => <EmployeeList companyData={companyData?.company?.employees} {...rest} />;

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

const mapStateToProps = (state) => {
  return { name: state.main.name, employeesData: state.main.employeesData };
};

const mapDispatchToProps = {
  setInfo,
  setEmployee,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
