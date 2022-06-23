// REDUX [ THUNKS > MEMMBERSHIP ] ##############################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMembershipsBegin, fetchMembershipsSuccess, fetchMembershipsError } from '../../api/calls/memberships';
// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. THUNKS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  // 2.1. FETCH MEMBERSHIPS .....................................................

  fetchMemberships: () => async dispatch => {
    dispatch(fetchMembershipsBegin());
    try {
      const memberships = await membershipsApi.fetchMemberships();
      return dispatch(fetchMembershipsSuccess(memberships))
    } catch (error) {
      return dispatch(fetchMembershipsError(error))
    }
  },

  // 2.1. END ..................................................................

  // 2.1. FETCH MEMBERSHIP BY ID ...............................................

  fetchMembership: createAsyncThunk('MEMBERSHIP', async id => {
    return membershipsApi.fetchMembershipById(id);
  })
  // 2.1. END ..................................................................
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
