// REDUX [ REDUCERS > MEMBERSHIPS ] ############################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import { createSlice } from '@reduxjs/toolkit';
import { STATE } from '../../constants';
import membershipsThunk from '../thunks/memberships';
// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. REDUCERS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const initialState = STATE.GENERIC;

const fetchMembershipsSlice = createSlice({
  name: 'MEMBERSHIPS',
  initialState,
  extraReducers: {
    [membershipsThunk.fetchMemberships.pending]: state => {
      state.status = 'loading';
    },
    [membershipsThunk.fetchMemberships.success]: (
      state,
      { payload }
    ) => {
      state.list = payload;
      state.status = 'success';
    },
    [membershipsThunk.fetchMemberships.failed]: state => {
      state.status = 'failed';
    }
  }
});

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export default fetchMembershipsSlice.reducer;
// END OF FILE #################################################################
