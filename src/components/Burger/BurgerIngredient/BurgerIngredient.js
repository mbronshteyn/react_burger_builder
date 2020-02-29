import React, {Component} from "react";
import PropTypes from 'prop-types'

import { randomInt } from "../../../util/Util";

import classes from './BurgerIngredient.module.css'

class BurgerIngredient extends Component {

  render() {
    let ingredient = null;
    switch (this.props.type) {
      case('bread-bottom'):
        ingredient = <div key={ randomInt() } className={classes.BreadBottom}>Bun</div>
        break;
      case('bread-top'):
        ingredient = (<div key={randomInt()} className={classes.BreadTop}>
          <div key={randomInt()} className={classes.Seeds1}>Bun</div>
          <div key={ randomInt() } className={classes.Seeds2}>Bun</div>
        </div>);
        break;
      case('meat'):
        ingredient = <div key={randomInt()} className={classes.Meat}>Meat</div>
        break;
      case('cheese'):
        ingredient = <div key={randomInt()} className={classes.Cheese}>Cheese</div>
        break;
      case('bacon'):
        ingredient = <div key={randomInt()} className={classes.Bacon}>Bacon</div>
        break;
      case('salad'):
        ingredient = <div key={randomInt()} className={classes.Salad}>Salad</div>
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