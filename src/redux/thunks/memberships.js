// REDUX [ THUNKS > MEMMBERSHIP ] ##############################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................
// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import { default as membershipsApi } from '../../api/calls/memberships';
import { membershipsActions } from '../actions';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. THUNKS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  // 2.1. FETCH MEMBERSHIPs .....................................................

  fetchMemberships: () => async dispatch => {
    dispatch(membershipsActions.fetchtMembershipsBegin());
    try {
      const memberships = await membershipsApi.fetchMemberships();
      return dispatch(
        membershipsActions.fetchMembershipsSuccess(memberships)
      );
    } catch (error) {
      return dispatch(
        membershipsActions.fetchMembershipsError(error)
      );
    }
  },

  // 2.1. END ..................................................................

  // 2.1. FETCH MEMBERSHIP BY ID ...............................................

  fetchMembership: id => async dispatch => {
    dispatch(membershipsActions.fetchtMembershipBegin());
    try {
      const membership = await membershipsApi.fetchMembershipById(
        id
      );
      return dispatch(
        membershipsActions.fetchMembershipSuccess(membership)
      );
    } catch (error) {
      return dispatch(
        membershipsActions.fetchMembershipError(error)
      );
    }
  }

  // 2.1. END ..................................................................
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
