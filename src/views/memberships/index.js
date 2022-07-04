// VIEW [ MEMBERSHIPS ] ########################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Buttons/Button';
import Container from '../../components/Container';
import Table from '../../components/Table';
import { membershipsThunk } from '../../redux/thunks';
import { ButtonCointainer } from './index.style';
// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Memberships = ({ fetchMemberships, memberships, status }) => {
  // 2.1. FUNCTIONS ............................................................

  const navigate = useNavigate();
  const routeChange = path => {
    navigate(path);
  };

  if (status === 'success') {
    console.log('STATUS: ', status);
    console.log('Data: ', memberships);
  }

  const tableData = data => {
    return data.map(item => ({
      first_name: item.first_name,
      last_name: item.last_name,
      email: item.email,
      contract_type: item.contract_type,
      is_active: item.is_active ? 'Active' : 'Inactive',
      actions: (
        <Link to={`/memberships/${item.id}`}> View Membership </Link>
      )
    }));
  };

  useEffect(() => {
    fetchMemberships();
  }, [fetchMemberships]);

  // 2.1. END ..................................................................

  // 2.2. RENDER ..............................................................
  return (
    <Fragment>
      <h1>Memberships</h1>
      <ButtonCointainer>
        <Button
          type="button"
          onClick={() => routeChange('/memberships/create')}
        >
          Create Membership
        </Button>
      </ButtonCointainer>
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
          data={tableData(memberships.data)}
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

const mapStateToProps = state => ({
  memberships: state.memberships.payload,
  status: state.memberships.status
});

// 4.1. END ....................................................................

// 4.2. MAP DISPATCH TO PROPS ..................................................

const mapDispatchToProps = dispatch => {
  return {
    fetchMemberships: () =>
      dispatch(membershipsThunk.fetchMemberships())
  };
};

// 4.2. END ....................................................................
// 4. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default connect (mapStateToProps, mapDispatchToProps)(Memberships);

// END OF FILE #################################################################
