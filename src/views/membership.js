// VIEW [ MEMBERSHIP ] #########################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Container from '../components/Container';
import FormInput from '../components/FormInput';
import { InputContainer } from '../components/FormInput/index.style';
import { membershipsThunk } from '../redux/thunks';
// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Membership = () => {
  // 2.1. FUNCTIONS ............................................................

  const dispatch = useDispatch();
  //   console.log('PARAMS: ', this.match.params.id);
  useEffect(() => {
    dispatch(
      membershipsThunk.fetchMembership(
        '76e6e5e6-3e64-45a9-b522-51e8f3224c7e'
      )
    );
  }, [dispatch]);

  // 2.1. END ..................................................................

  // 2.2. RENDER ..............................................................
  return (
    <Fragment>
      <h1>Membership</h1>
      <Container>
        <form onSubmit={() => console.log('Submiting')}>
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
          <Link to="/memberships/create">
            {' '}
              <Button type="submit">Edit</Button>
            {' '}
          </Link>

        </form>
      </Container>
    </Fragment>
  );

  // 2.2. END ..................................................................
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. PROP TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memberships.propTypes = {};

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 4. REDUX ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 4.1. MAP STATE TO PROPS .....................................................

// const mapProps = state => ({
//   memberships: state.memberships.data
// });

// 4.1. END ....................................................................

// 4.2. MAP DISPATCH TO PROPS ..................................................

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchMemberships: () =>
//       dispatch(membershipsThunk.fetchMemberships())
//   };
// };

// 4.2. END ....................................................................
// 4. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Membership;

// END OF FILE #################################################################
