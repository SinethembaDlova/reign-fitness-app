// REDUX [ ACTIONS > MEMBERSHIPS ] #############################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................
// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import { TYPE } from '../../constants';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. ACTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  // 2.1. FETCH MEMBERSHIPS ....................................................

  fetchtMembershipsBegin: () => ({
    type: TYPE.MEMBERSHIPS.FETCHING_BEGIN
  }),

  fetchMembershipsSuccess: payload => ({
    type: TYPE.MEMBERSHIPS.FETCHING_SUCEESS,
    payload
  }),

  fetchMembershipsError: payload => ({
    type: TYPE.MEMBERSHIPS.FETCHING_ERROR,
    payload
  }),

  // 2.1. END ..................................................................

  // 2.2. FETCH MEMBERSHIP .....................................................

  fetchtMembershipBegin: () => ({
    type: TYPE.MEMBERSHIP.FETCHING_BEGIN
  }),

  fetchMembershipSuccess: payload => ({
    type: TYPE.MEMBERSHIP.FETCHING_SUCEESS,
    payload
  }),

  fetchMembershipError: payload => ({
    type: TYPE.MEMBERSHIP.FETCHING_ERROR,
    payload
  })

  // 2.2. END ..................................................................
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
