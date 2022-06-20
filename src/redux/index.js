import { configureStore } from '@reduxjs/toolkit';
import fetchMembershipSlice  from './reducers/membership';
import fetchMembershipsSlice from './reducers/memberships';

const store = configureStore({
  reducer: {
    membership: fetchMembershipSlice,
    memberships: fetchMembershipsSlice
  }
});

export default store;
