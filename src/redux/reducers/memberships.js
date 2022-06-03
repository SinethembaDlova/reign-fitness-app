// REDUX [ REDUCERS > MEMBERSHIPS ] ############################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................
// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import { STATE, TYPE } from '../../constants';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. REDUCERS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default (state = STATE.GENERIC, { type, payload }) => {
  switch (type) {
    case TYPE.MEMBERSHIPS.FETCHING_BEGIN:
      return {
        ...state,
        status: 'fetching'
      };
    case TYPE.MEMBERSHIPS.FETCHING_SUCEESS:
      return {
        ...state,
        status: 'success',
        payload
      };
    case TYPE.MEMBERSHIPS.FETCHING_ERROR:
      return {
        ...state,
        status: 'error',
        payload
      };
    default:
      return state;
  }
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
