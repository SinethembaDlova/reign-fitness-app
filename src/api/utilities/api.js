// UTILITIES [ API ] ###########################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. UTIL +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  axiosOptions: () => {
    return {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  },

  url: endpoint => {
    const default_endpoint = process.env.REACT_APP_API;
    return default_endpoint || endpoint;
  }
};

// 2. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE ################################################################
