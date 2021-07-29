import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch } from 'react-redux';
import * as actions from '../actions';

const Payments = () => {
  const dispatch = useDispatch();

  return (
    <StripeCheckout
      name="Emaily"
      description="$5 for 5 email credits"
      amount={500}
      token={(token) => dispatch(actions.handleToken(token))}
      stripeKey={process.env.REACT_APP_STRIPE_PUBLIC}
    >
      <button className="btn">Add Credits</button>
    </StripeCheckout>
  );
};

export default Payments;
