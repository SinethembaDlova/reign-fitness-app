// VIEW [ MEMBERSHIPS ] ########################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import React, { Fragment } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Buttons/Button';
import Container from '../components/Container';
import Table from '../components/Table';
// import { membershipsThunk } from '../redux/thunks';
// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Memberships = () => {
  // 2.1. FUNCTIONS ............................................................

  const navigate = useNavigate();
  const routeChange = path => {
    navigate(path);
  };
  // const tableData = data => {
  //   return data.map(item => ({
  //     first_name: item.first_name,
  //     last_name: item.last_name,
  //     contract_type: item.contract_type,
  //     is_active: item.is_active ? 'Active' : 'Inactive',
  //     actions: (
  //       <Link to={`/memberships/${item.id}`}> View Membership </Link>
  //     )
  //   }));
  // };

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(membershipsThunk.fetchMemberships());
  // }, [dispatch]);
  // console.log('Hello');
  // const { payload } = useSelector(state => state.payload);
  // console.log('data: ', payload);

  // 2.1. END ..................................................................

  // 2.2. RENDER ..............................................................
  return (
    <Fragment>
      <h1>Memberships</h1>
      <Button
        type="button"
        onClick={() => routeChange('/memberships/create')}
      >
        Create Membership
      </Button>
      <Container>
        <Table
          columnNames={[
            'First Name',
            'Last Name',
            'Email Address',
            'Contract Type',
            'Status',
            'Action'
          ]}
          data={[
            {
              first_name: 'Sinethemba',
              last_name: 'Dlova',
              email: 'dSinethemba@gmail.com',
              type: 'Student',
              active: 'Active',
              actions: (
                <Link to="/memberships/1024232023432">
                  {' '}
                  View Membership{' '}
                </Link>
              )
            },
            {
              first_name: 'Dame',
              last_name: 'Dash',
              email: 'damedashpunk@gmail.com',
              type: 'Reigner',
              active: 'Inactive',
              actions: (
                <Link to="/memberships/14342023432">
                  {' '}
                  View Membership{' '}
                </Link>
              )
            }
          ]}
        >
        </Table>
      </Container>
      <Container />
    </Fragment>
  );

  // 2.2. END ..................................................................
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. PROP TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memberships.propTypes = {};

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 4. REDUX ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 4.1. MAP STATE TO PROPS .....................................................

// const mapProps = state => ({
//   memberships: state.memberships.data
// });

// 4.1. END ....................................................................

// 4.2. MAP DISPATCH TO PROPS ..................................................

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchMemberships: () =>
//       dispatch(membershipsThunk.fetchMemberships())
//   };
// };

// 4.2. END ....................................................................
// 4. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Memberships;

// END OF FILE #################################################################
