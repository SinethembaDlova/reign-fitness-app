// REDUX [  REDUCERS ] #########################################################

// 1. DEPENDENCIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import { combineReducers } from 'redux';
import fetchMembershipSlice from './membership';
import fetchMembershipsSlice from './memberships';
// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMBINE REDUCERS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const rootReducer = combineReducers({
  membership: fetchMembershipSlice,
  memberships: fetchMembershipsSlice
});
// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default rootReducer;
// END OF FILE #################################################################
