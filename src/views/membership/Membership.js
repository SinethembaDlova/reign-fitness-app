// VIEW [ MEMBERSHIP ] #########################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from '../../components/Container';
import MembershipForm from '../../components/Forms/MembershipForm';
import { MEMBERSHIPS } from '../../constants';
import { membershipsThunk } from '../../redux/thunks';
// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Membership = ({ fetchMembership, membership }) => {
  // 2.1. STATE ................................................................
  const id = useParams();
  const [membershipData] = useState(MEMBERSHIPS.formData);

  // 2.1. END ..................................................................

  // 2.1. FUNCTIONS ............................................................
  useEffect(() => {
    fetchMembership(id);
  }, [fetchMembership, id]);

  // 2.1. END ..................................................................

  // 2.2. RENDER ..............................................................
  return (
    <Fragment>
      <h1>Membership</h1>
      <Container>
        <MembershipForm data={membership || membershipData} />
      </Container>
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
  membership: state?.membership?.payload?.data[0],
  status: state?.membership?.status
});

// 4.1. END ....................................................................

// 4.2. MAP DISPATCH TO PROPS ..................................................

const mapDispatchToProps = dispatch => {
  return {
    fetchMembership: id =>
      dispatch(membershipsThunk.fetchMembership(id))
  };
};

// 4.2. END ....................................................................
// 4. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Membership);

// END OF FILE #################################################################
