// REDUX [ THUNKS > MEMMBERSHIP ] ##############################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................
// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import { membershipActions } from '../actions';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. THUNKS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  // 2.1. FETCH MEMBERSHIP .....................................................

  fetchMembership: () => async dispatch => {
    dispatch(membershipActions.fetchtMembershipBegin());
    try {
      const membership = await dispatch(
        'Hello, Fetch Membership API will be here.'
      );
      return dispatch(
        membershipActions.fetchMembershipSuccess(membership)
      );
    } catch (error) {
      return dispatch(membershipActions.fetchMembershipError(error));
    }
  }

  // 2.1. END ..................................................................
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
