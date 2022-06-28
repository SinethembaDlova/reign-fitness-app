// BUTTON [ STYLE ] ############################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import styled, { css } from 'styled-components';

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STYLES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. DEFAULT BUTTON .........................................................
const defaultButton = css`
  background: #081b4b;
  border-radius: 3px;
  border: 5px solid #081b4b;
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;
  width: fit-content;
  // align-items: center;
  text-align: center;
  // display: flex;

  &:hover {
    background-color: #4169e1;
    color: white;
    border: 5px solid #1635fc;
  }
`;

// 3.1 END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.2 CUSTOM BUTTON ..........................................................
export const CustomButton = styled.button`
  min-width: 120px;
  height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;

  ${defaultButton}
`;
// 3.2 END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.3. BUTTON CONTAINER........................................................
export const ButtonCointainer = styled.div`
  margin: 0% 10% 1% 10%;
`;
// 3.3 END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.3. BUTTONs CONTAINER........................................................
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 25px 0 10px;
`;
// 3.3 END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
