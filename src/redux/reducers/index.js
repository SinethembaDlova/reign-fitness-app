// REDUX [  REDUCERS ] #########################################################

// 1. DEPENDENCIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import { combineReducers } from 'redux';
import fetchMembership from './membership';
import fetchMemberships from './memberships';
// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMBINE REDUCERS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const reducer = combineReducers({
  membership: fetchMembership,
  memberships: fetchMemberships
});
// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default reducer;
// END OF FILE #################################################################
