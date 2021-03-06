import React from 'react';

import Aux from '../../../hoc/Aux'
import {randomInt} from '../../../util/Util'

const OrderSummary = props => {

  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={randomInt()}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>:
          {props.ingredients[igKey]}
        </li>
      )
    });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout?</p>
      <button>CANCEL</button>
      <button>CONTINUE</button>
    </Aux>
  );
};

OrderSummary.propTypes = {};

export default OrderSummary;