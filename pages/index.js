import { EmployeeList } from '@components';
import client from '@lib';
import { gql } from '@apollo/client';
import { connect } from 'react-redux';
import { setInfo } from '../redux/actions/main';
import { wrapper } from '../redux/store';

const Home = ({ companyData, name, setInfo }) => {
  return (
    <>
      <EmployeeList employeeData={companyData?.company?.employees} />
    </>
  );
};

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

  return {
    props: {
      companyData: data || {},
    },
  };
});

const mapStateToProps = (state) => {
  return { name: state.main.name };
};

const mapDispatchToProps = {
  setInfo,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
