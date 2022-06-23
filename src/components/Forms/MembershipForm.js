// CONTAINER ###################################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import React from 'react';
import SaveCancelButton from '../Buttons/SaveCancelButton';
import FormInput from '../FormInput';
import { InputContainer } from '../FormInput/index.style';
import { FormContainer } from './index.style';

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const MembershipForm = () => {
  // 2.1. FUNCTIONS ............................................................
  // 2.1. END ..................................................................

  // 2.2. RENDER COMPONENT .....................................................

  return (
    <form onSubmit={() => console.log('Submiting')}>
      <FormContainer>
        <InputContainer>
          <FormInput
            name="first_name"
            type="text"
            handleChange={() => console.log('Changings first name')}
            value="Sinethemba"
            label="First Name"
            required
          />
          <FormInput
            name="last_name"
            type="text"
            handleChange={() => console.log('Changings first name')}
            value="Dlova"
            label="Last Name"
            required
          />
        </InputContainer>
        <InputContainer>
          <FormInput
            name="phone_number"
            type="text"
            handleChange={() => console.log('Changings first name')}
            value="0811232193"
            label="Phone Number"
            required
          />
          <FormInput
            name="email"
            type="text"
            handleChange={() => console.log('Changings first name')}
            value="dSinethemba@gmail.com"
            label="Email Address"
            required
          />
        </InputContainer>
        <InputContainer>
          <FormInput
            name="Payment Type"
            type="text"
            handleChange={() => console.log('Changings first name')}
            value="Card"
            label="Payment Type"
            required
          />
          <FormInput
            name="Bank Account"
            type="text"
            handleChange={() => console.log('Changings first name')}
            value="923423443423"
            label="Bank Account"
            required
          />
        </InputContainer>
        <InputContainer>
          <FormInput
            name="Contact Type"
            type="text"
            handleChange={() => console.log('Changings first name')}
            value="Student"
            label="Contract Type"
            required
          />
          <FormInput
            name="amount"
            type="number"
            handleChange={() => console.log('Changings first name')}
            value="500"
            label="Amount"
            required
          />
        </InputContainer>
      </FormContainer>
      <SaveCancelButton />
    </form>
  );

  // 2.2. END ..................................................................
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default MembershipForm;

// END OF FILE #################################################################
