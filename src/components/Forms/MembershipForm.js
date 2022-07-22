// CONTAINER ###################################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { membershipsThunk } from '../../redux/thunks';
import FormInput from '../FormInput';
import { InputContainer } from '../FormInput/index.style';
import { FormContainer } from './index.style';

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const MembershipForm = ({ data, createMembership, children }) => {
  const [membership, updateMembership] = useState(data);

  // 2.1. FUNCTIONS ............................................................
  const handleChange = event => {
    const { name, value } = event.target;
    updateMembership(() => {
      return {
        ...membership,
        [name]: value
      };
    });
  };
  // 2.1. END ..................................................................

  // 2.2. RENDER COMPONENT .....................................................

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        const fixedMembership = {
          ...membership,
          amount: parseInt(membership.amount)
        };
        createMembership(fixedMembership);
      }}
    >
      <FormContainer>
        <InputContainer>
          <FormInput
            name="first_name"
            type="text"
            handleChange={e => handleChange(e)}
            value={membership?.first_name}
            label="First Name"
            required
          />
          <FormInput
            name="last_name"
            type="text"
            handleChange={e => handleChange(e)}
            value={membership?.last_name}
            label="Last Name"
            required
          />
        </InputContainer>
        <InputContainer>
          <FormInput
            name="phone_number"
            type="text"
            handleChange={e => handleChange(e)}
            value={membership?.phone_number}
            label="Phone Number"
            required
          />
          <FormInput
            name="email"
            type="text"
            handleChange={e => handleChange(e)}
            value={membership?.email}
            label="Email Address"
            required
          />
        </InputContainer>
        <InputContainer>
          <FormInput
            name="id_number"
            type="text"
            handleChange={e => handleChange(e)}
            value={membership?.id_number}
            label="ID Number"
            required
          />
        </InputContainer>
        <InputContainer>
          <FormInput
            name="payment_type"
            type="text"
            handleChange={e => handleChange(e)}
            value={membership?.payment_type}
            label="Payment Type"
            required
          />
          <FormInput
            name="bank_account_number"
            type="text"
            handleChange={e => handleChange(e)}
            value={membership?.bank_account_number}
            label="Bank Account"
          />
        </InputContainer>
        <InputContainer>
          <FormInput
            name="contract_type"
            type="text"
            handleChange={e => handleChange(e)}
            value={membership?.contract_type}
            label="Contract Type"
            required
          />
          <FormInput
            name="amount"
            type="number"
            handleChange={e => handleChange(e)}
            value={membership?.amount}
            label="Amount"
            required
          />
        </InputContainer>
      </FormContainer>
      {children}
    </form>
  );

  // 2.2. END ..................................................................
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 4. REDUX ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 4.1. MAP STATE TO PROPS .....................................................

const mapStateToProps = state => ({
  membership: state.membership.payload,
  status: state.membership.status
});

// 4.1. END ....................................................................

// 4.2. MAP DISPATCH TO PROPS ..................................................

const mapDispatchToProps = dispatch => {
  return {
    createMembership: body =>
      dispatch(membershipsThunk.createMembership(body))
  };
};

// 4.2. END ....................................................................
// 4. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MembershipForm);

// END OF FILE #################################################################
