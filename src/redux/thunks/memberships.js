// REDUX [ THUNKS > MEMMBERSHIP ] ##############################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................
// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import { membershipsActions } from '../actions';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. THUNKS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  // 2.1. FETCH MEMBERSHIP .....................................................

  fetchMembership: () => async dispatch => {
    dispatch(membershipsActions.fetchtMembershipsBegin());
    try {
      const membership = await dispatch(
        'Hello, Fetch MembershipS API will be here.'
      );
      return dispatch(
        membershipsActions.fetchMembershipsSuccess(membership)
      );
    } catch (error) {
      return dispatch(
        membershipsActions.fetchMembershipsError(error)
      );
    }
  }

  // 2.1. END ..................................................................
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
