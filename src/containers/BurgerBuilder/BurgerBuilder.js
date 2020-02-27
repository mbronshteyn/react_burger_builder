import React, { Component } from "react";

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 1,
      bacon: 2,
      meat: 2,
      cheese: 1,
    }
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls/>
      </Aux>
    );
  }
}

export default BurgerBuilder;