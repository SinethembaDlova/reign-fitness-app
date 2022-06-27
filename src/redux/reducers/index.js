// REDUX [  REDUCERS ] #########################################################

// 1. DEPENDENCIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import { combineReducers } from 'redux';
import fetchMembership from './membership';
import fetchMembershipsSlice from './memberships';
// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMBINE REDUCERS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const reducer = combineReducers({
  membership: fetchMembership,
  memberships: fetchMembershipsSlice
});
// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default reducer;
// END OF FILE #################################################################
