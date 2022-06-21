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
    [membershipsThunk.fetchMemberships.fulfilled]: (
      state,
      { payload }
    ) => {
      state.payload = payload.data;
      state.status = 'success';
    },
    [membershipsThunk.fetchMemberships.rejected]: (
      state,
      { error }
    ) => {
      state.status = 'failed';
      state.error = error;
    }
  }
});

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export default fetchMembershipsSlice.reducer;
// END OF FILE #################################################################
