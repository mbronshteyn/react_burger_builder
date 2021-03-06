import React, {Component} from "react";

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Aux from '../../hoc/Aux';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

export const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
  tomato: 0.3,
};

export default class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      tomato: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 0,
    purchasable: false,
    purchasing: false,
  };

  purchaseHandler = () => {
    this.setState({purchasing: true})
  };

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };

    updatedIngredients[type] = updatedCount;

    // need to make sure INGREDIENT_PRICES are matching
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    // update state
    this.setState( {
      ingredients: updatedIngredients,
      totalPrice: newPrice,
      purchasable: newPrice > 0
    });
  };

  removeIngredientHandler = ( type ) => {
    const oldCount = this.state.ingredients[type];

    if( oldCount <= 0 ){
      return;
    }

    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };

    updatedIngredients[type] = updatedCount;

    // need to make sure INGREDIENT_PRICES are matching
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    // update state
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
      purchasable: newPrice > 0
    });
  };

  modalClosed = () => {

  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    // convert disabledInfo array to true/false
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary ingredients={this.state.ingredients}/>
        </Modal>
        <BuildControls
          price={this.state.totalPrice.toFixed(2)}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          orderd={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

