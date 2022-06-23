import { EmployeeList } from '@components';
import client from '@lib';
import { gql } from '@apollo/client';
import { connect } from 'react-redux';
import { setInfo, setEmployee } from '../redux/actions/main';
import { wrapper } from '../redux/store';

const Home = ({ employeesData }) => <EmployeeList employeeData={employeesData} />;

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const { data } = await client.query({
    query: gql`
      query {
        company {
          id
          industry
          name
          employees {
            id
            imageUrl
            firstName
            company {
              name
            }
            lastName
            jobTitle
            rate
            employeeDetail {
              id
              phone
              address
              eMail
            }
          }
        }
      }
    `,
  });

  store.dispatch(setEmployee(data?.company?.employees));
  const employeesData = store.getState().main.employeesData;

  return {
    props: {
      companyData: data || {},
      employeesData: employeesData,
    },
  };
});

const mapStateToProps = (state) => {
  return { name: state.main.name };
};

const mapDispatchToProps = {
  setInfo,
  setEmployee,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
