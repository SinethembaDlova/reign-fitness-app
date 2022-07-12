// CONTAINER ###################################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import React from 'react';
import SaveCancelButton from '../Buttons/SaveCancelButton';
import FormInput from '../FormInput';
import { InputContainer } from '../FormInput/index.style';
import { FormContainer } from './index.style';

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const MembershipForm = ({ data }) => {
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
            value={data.first_name}
            label="First Name"
            required
          />
          <FormInput
            name="last_name"
            type="text"
            handleChange={() => console.log('Changings first name')}
            value={data.last_name}
            label="Last Name"
            required
          />
        </InputContainer>
        <InputContainer>
          <FormInput
            name="phone_number"
            type="text"
            handleChange={() => console.log('Changings first name')}
            value={data.phone_number}
            label="Phone Number"
            required
          />
          <FormInput
            name="email"
            type="text"
            handleChange={() => console.log('Changings first name')}
            value={data.email}
            label="Email Address"
            required
          />
        </InputContainer>
        <InputContainer>
          <FormInput
            name="Payment Type"
            type="text"
            handleChange={() => console.log('Changings first name')}
            value={data.payment_type}
            label="Payment Type"
            required
          />
          <FormInput
            name="Bank Account Number"
            type="text"
            handleChange={() => console.log('Changings first name')}
            value={data.bank_account_number}
            label="Bank Account"
            required
          />
        </InputContainer>
        <InputContainer>
          <FormInput
            name="Contact Type"
            type="text"
            handleChange={() => console.log('Changings first name')}
            value={data.contract_type}
            label="Contract Type"
            required
          />
          <FormInput
            name="amount"
            type="number"
            handleChange={() => console.log('Changings first name')}
            value={data.amount}
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
