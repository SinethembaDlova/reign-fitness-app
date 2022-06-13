// UTILITIES [ API ] ###########################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. UTIL +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
    axiosOptions: (withCredentials = true) => {
      return {
        withCredentials,
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      };
    },
  
    url: (endpoint) => {
      const default_endpoint = 'http://localhost:5000'
      return endpoint || default_endpoint;
    },
  }
    
  // 2. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
    
  // END OF FILE ################################################################
    