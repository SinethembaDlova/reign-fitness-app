// VIEW [ MEMBERSHIP ] #########################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../components/Container';
import MembershipForm from '../../components/Forms/MembershipForm';
import { membershipsThunk } from '../../redux/thunks';
// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Membership = () => {
  // 2.1. FUNCTIONS ............................................................

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      membershipsThunk.fetchMembership(
        '76e6e5e6-3e64-45a9-b522-51e8f3224c7e'
      )
    );
  }, [dispatch]);

  // 2.1. END ..................................................................

  // 2.2. RENDER ..............................................................
  return (
    <Fragment>
      <h1>Membership</h1>
      <Container>
        <MembershipForm />
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

export default Membership;

// END OF FILE #################################################################