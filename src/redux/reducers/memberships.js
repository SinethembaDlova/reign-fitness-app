// REDUX [ REDUCERS > MEMBERSHIPS ] ############################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import { createSlice } from '@reduxjs/toolkit';
import { STATE } from '../../constants';
import membershipsThunk from '../thunks/memberships';
// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. REDUCERS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const initialState = STATE.GENERIC;

const fetchMemberships = createSlice({
  name: 'memberships',
  initialState,
  reducers: {
    fetchMembershipsSuccess: state => {
      state.status = 'loading';
    },
    fetchMembershipsSuccess: ( state, { payload }) => {
      state.data = payload.data;
      state.status = 'success';
    },
    fetchMembershipsError: (state, { error }) => {
      state.status = 'failed';
      state.error = error;
    }
  }
});

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export default fetchMemberships.reducer;
// END OF FILE #################################################################
