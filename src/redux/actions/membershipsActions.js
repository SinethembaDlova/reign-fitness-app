// REDUX [ ACTIONS > INTERVIEW ACTIONS ] #######################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................
import { createAction } from '@reduxjs/toolkit';
// 1.1. END ....................................................................
// 1.2. INTERNAL DEPENDENCIES ..................................................
import { TYPE } from '../../constants';
// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. ACTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  // 2.1. FETCH MEMBERSHIPS ....................................................

  fetchtMembershipsActionBegin: createAction(
    TYPE.MEMBERSHIPS.FETCHING_MEMBERSHIPS_BEGIN
  ),

  fetchMembershipsActiopSuccess: createAction(
    TYPE.MEMBERSHIPS.FETCHING_MEMBERSHIPS_SUCEESS,
    function prepare (payload) {
      return {
        payload
      };
    }
  ),

  fetchMembershipsActionsError: createAction(
    TYPE.MEMBERSHIPS.FETCHING_MEMBERSHIPS_ERROR,
    function prepare (payload) {
      return {
        payload
      };
    }
  )

  // 2.1. END ..................................................................
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
