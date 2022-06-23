// BUTTON [ STYLE ] ############################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import styled, { css } from 'styled-components';

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STYLES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. DEFAULT BUTTON .........................................................
const defaultButton = css`
  background: #1635fc;
  border-radius: 3px;
  border: 5px solid #1635fc;
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;
  width: fit-content;
  align-items: center;
  margin: 0% 10% 1% 10%;
  display: flex;
  justify-content: flex-end;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

// 3.1 END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.2. INVERTED BUTTON  .......................................................

const invertedButton = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

// 3.2 END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.3. FETCH BUTTON STYLES ....................................................
const fetchButtonStyles = props => {
  return props.inverted ? invertedButton : defaultButton;
};

// 3.3 END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.4. CUSTOM BUTTON ..........................................................
export const CustomButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;

  ${fetchButtonStyles}
`;
// 3.4 END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.5. BUTTON CONTAINER..........................................................
export const ButtonCointainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
// 3.5 END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
