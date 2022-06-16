// VIEW [ MEMBERSHIPS ] ########################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import React, { Fragment, useMemo } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Table from '../components/Table';
import { membershipsThunk } from '../redux/thunks';
// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Memberships = ({ fetchMemberships, memberships }) => {
  // 2.1. FUNCTIONS ............................................................

  const tableData = data => {
    return data.map(item => ({
      first_name: item.first_name,
      last_name: item.last_name,
      contract_type: item.contract_type,
      is_active: item.is_active ? 'Active' : 'Inactive',
      actions: (
        <Link to={`/memberships/${item.id}`}> View Membership </Link>
      )
    }));
  };

  useMemo(() => {
    fetchMemberships();
  }, [fetchMemberships]);

  // 2.1. END ..................................................................

  // 2.2. RENDER ..............................................................
  return (
    <Fragment>
      <h2>Hello Memberships</h2>
      <Table
        columnNames={['Name', 'Surname', 'Type', 'Status']}
        data={tableData(memberships)}
      >
      </Table>
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

const mapProps = state => ({
  memberships: state.memberships.data
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

export default connect(mapProps, mapDispatchToProps)(Memberships);

// END OF FILE #################################################################
