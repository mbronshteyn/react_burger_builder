import React, {Component} from "react";
import PropTypes from 'prop-types'

import classes from './BurgerIngredient.module.css'

class BurgerIngredient extends Component {

  render() {

    let ingredient = null;

    switch (this.props.type) {
      case('bread-bottom'):
        ingredient = <div className={classes.BreadBottom}/>
        break;
      case('bread-top'):
        ingredient = (<div className={classes.BreadTop}>
          <div className={classes.Seeds1}/>
          <div className={classes.Seeds2}/>
        </div>);
        break;
      case('meat'):
        ingredient = <div className={classes.Meat}></div>
        break;
      case('cheese'):
        ingredient = <div className={classes.Cheese}></div>
        break;
      case('bacon'):
        ingredient = <div className={classes.Bacon}></div>
        break;
      case('salad'):
        ingredient = <div className={classes.Salad}></div>
        break;
      default:
        ingredient = null;

    }

    console.log('Ingredient: ', ingredient);

    return ingredient;
  }
};

BurgerIngredient.propTypes = {
  'bread-bottom': PropTypes.string,
  'bread-top': PropTypes.string,
  cheese: PropTypes.string,
  salad: PropTypes.string,
  bacon: PropTypes.string,
  meat: PropTypes.string,
};

export default BurgerIngredient;