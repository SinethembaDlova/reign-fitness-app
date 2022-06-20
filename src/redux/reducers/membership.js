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
  name: 'MEMBERSHIP',
  initialState,
  extraReducers: {
    [membershipsThunk.fetchMembership.pending]: state => {
      state.status = 'loading';
    },
    [membershipsThunk.fetchMembership.fulfilled]: (state, { payload }) => {
      state.payload = payload.data;
      state.status = 'success';
    },
    [membershipsThunk.fetchMembership.rejected]: (state, { error }) => {
      state.status = 'failed';
      state.error = error;
    }
  }
});

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default fetchMembershipSlice;

// END OF FILE #################################################################
