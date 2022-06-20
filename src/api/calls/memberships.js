// [ MEMBERSHIPS SERVICE ]######################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import axios from 'axios';
import apiUtilities from '../utilities/api';
// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  // 2.1. FETCH ALL MEMBERSHIPS ................................................

  fetchMemberships: async () => {
    const path = `${apiUtilities.url()}/memberships`;

    try {
      const res = await axios.get(path, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return res;
    } catch (error) {
      throw new Error(error);
    }
  },

  // 2.1. END ..................................................................

  // 2.2. FETCH A MEMBERSHIP BY ID .............................................

  fetchMembershipById: async (endpoint, id) => {
    const path = `${apiUtilities.url()}/memberships?id=${id}`;

    try {
      const res = await axios.get(path);
      return res;
    } catch (error) {
      throw new Error(error);
    }
  },

  // 2.2. END ..................................................................

  // 2.3. CREATE A MEMBERSHIP ..................................................

  createMembership: async (endpoint, body) => {
    const path = `${apiUtilities.url(endpoint)}/memberships`;

    try {
      const res = await axios.post(path, body);
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }

  // 2.3. END ..................................................................
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
