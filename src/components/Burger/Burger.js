import React from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import styles from './Burger.module.css';

import { randomInt } from "../../util/Util";


const burger = ( props ) => {

  let transformedIngredients = null;
  transformedIngredients = Object.keys( props.ingredients )
    .map( igKey => {
      return [...Array(props.ingredients[igKey])].map( (_,i) => {
        return <BurgerIngredient key={ igKey + 1 + randomInt() } type={igKey} />
      })
    })
    .reduce( ( arr, el ) => {
      return arr.concat( el )
    }, []);

  if( transformedIngredients.length === 0 ){
    transformedIngredients = <p>Please start adding ingredients!</p>
  }

  return (
    <div  className={styles.Burger}>
      <BurgerIngredient type='bread-top' />
      { transformedIngredients }
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;
