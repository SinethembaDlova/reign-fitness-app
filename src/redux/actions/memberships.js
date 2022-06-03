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

  fetchtMembershipsActionBegin: () => ({
    type: TYPE.MEMBERSHIPS.FETCHING_BEGIN
  }),

  fetchMembershipsActiopSuccess: payload => ({
    type: TYPE.MEMBERSHIPS.FETCHING_SUCEESS,
    payload
  }),

  fetchMembershipsActionsError: payload => ({
    type: TYPE.MEMBERSHIPS.FETCHING_ERROR,
    payload
  })

  // 2.1. END ..................................................................
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
