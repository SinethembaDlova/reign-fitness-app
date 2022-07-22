// LOADER [ STYLE ] ############################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import styled from 'styled-components';

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STYLES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. LOADER OVERLAY .........................................................
export const LoaderOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 3.1 END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.2 LOADER CONTAINER ........................................................
export const LoaderContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
// 3.2 END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// END OF FILE #################################################################
