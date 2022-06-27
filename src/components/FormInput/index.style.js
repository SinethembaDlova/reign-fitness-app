// FORM INPUT [ STYLE ] ########################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import styled, { css } from 'styled-components';

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const subColor = 'grey';
const mainColor = 'black';
// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STYLES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. SHRINK LABEL STYLE  ....................................................
const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

// 3.1 END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.2. GROUP CONTAINER  .......................................................

export const GroupContainer = styled.div`
  position: relative;
  margin: 15px 40px 15px 15px;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
  display: flex;
  width: 50%;
`;
// 3.2 END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.3. FORM INPUT CONTAINER ...................................................
export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 2px solid #009879;
  margin: 25px 0;
  &:hover {
    border: 2px solid #009879;
  }
  &:focus {
    outline: none;
  }
  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

// 3.3 END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.4. FORM INPUT LABEL .......................................................

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 30px;
  font-weight: bold;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  &.shrink {
    ${shrinkLabelStyles}
  }
`;
// 3.4 END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.5. iNPUT CONTAINER ........................................................

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
// 3.5 END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// END OF FILE #################################################################
