// VIEW [ CREATE MEMBERSHIP ] ##################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SaveCancelButton from '../../components/Buttons/SaveCancelButton';
import Container from '../../components/Container';
import MembershipForm from '../../components/Forms/MembershipForm';
import { MEMBERSHIPS } from '../../constants';
import { membershipsThunk } from '../../redux/thunks';
// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const CreateMembership = ({
  membership,
  status
}) => {
  // 2.1. STATE ................................................................
  // 2.1. END ..................................................................

  // 2.1. FUNCTIONS ............................................................

  const navigate = useNavigate();

  if (status === 'success') {
    console.log('STATUS: ', status);
    console.log('DATA: ', membership);
  }

  //   useEffect(() => {
  //     initializeMembership(membership.data[0]);
  //   }, [membership]);

  // 2.1. END ..................................................................

  // 2.2. RENDER ..............................................................
  return (
    <Fragment>
      <h1>Create Membership</h1>
      <Container>
        <MembershipForm
          data={MEMBERSHIPS.formData}
        >
          <SaveCancelButton handleCancelling={() => navigate(-1)} />
        </MembershipForm>
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
  membership: state.membership.payload,
  status: state.membership.status
});

// 4.1. END ....................................................................

// 4.2. MAP DISPATCH TO PROPS ..................................................

const mapDispatchToProps = dispatch => {
  return {
    createMembership: body => dispatch(membershipsThunk.createMembership(body))
  };
};

// 4.2. END ....................................................................
// 4. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMembership);

// END OF FILE #################################################################
