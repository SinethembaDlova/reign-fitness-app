// REDUX [ THUNKS > MEMMBERSHIP ] ##############################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import { createAsyncThunk } from '@reduxjs/toolkit';
import { default as membershipsApi } from '../../api/calls/memberships';
// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. THUNKS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  // 2.1. FETCH MEMBERSHIPS .....................................................

  fetchMemberships: createAsyncThunk('MEMBERSHIPS', async () => {
    return membershipsApi.fetchMemberships();
  }),

  // 2.1. END ..................................................................

  // 2.1. FETCH MEMBERSHIP BY ID ...............................................

  fetchMembership: createAsyncThunk('MEMBERSHIP', async id => {
    return membershipsApi.fetchMembershipById(id);
  })
  // 2.1. END ..................................................................
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
