// REDUX [ REDUCERS > MEMBERSHIPS ] ############################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import { createSlice } from '@reduxjs/toolkit';
import { STATE } from '../../constants';
import { membershipsThunk } from '../thunks';
// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. REDUCERS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const initialState = STATE.GENERIC;

const fetchMembershipsSlice = createSlice({
  name: 'memberships',
  initialState,
  extraReducers: builder => {
    builder.addCase(
      membershipsThunk.fetchMemberships.pending,
      state => {
        state.status = 'loading';
      }
    ),
      builder.addCase(
        membershipsThunk.fetchMemberships.fulfilled,
        (state, { payload }) => {
          state.payload = payload.data;
          state.status = 'success';
        }
      ),
      builder.addCase(
        membershipsThunk.fetchMemberships.rejected,
        (state, { error }) => {
          state.status = 'failed';
          state.error = error;
        }
      );
  }
});

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export default fetchMembershipsSlice.reducer;
// END OF FILE #################################################################
