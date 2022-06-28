// REDUX [ REDUCERS > MEMBERSHIP } #############################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................
// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import { createSlice } from '@reduxjs/toolkit';
import { STATE } from '../../constants';
import membershipsThunk from '../thunks/memberships';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. REDUCERS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const initialState = STATE.GENERIC;

const fetchMembershipSlice = createSlice({
  name: 'membership',
  initialState,
  extraReducers: builder => {
    builder.addCase(
      membershipsThunk.fetchMembership.pending,
      state => {
        state.status = 'loading';
      }
    ),
      builder.addCase(
        membershipsThunk.fetchMembership.fulfilled,
        (state, { payload }) => {
          state.payload = payload.data;
          state.status = 'success';
        }
      ),
      builder.addCase(
        membershipsThunk.fetchMembership.rejected,
        (state, { error }) => {
          state.status = 'failed';
          state.error = error;
        }
      );
  }
});

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export default fetchMembershipSlice.reducer;
// END OF FILE #################################################################
