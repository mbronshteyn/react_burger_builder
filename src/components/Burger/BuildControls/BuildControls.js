import React from "react";

import styles from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
  {label: 'Bacon', type: 'bacon'},
];

const buildControls = (props) => (
  <div className={styles.BuildControls} id='buildControls'>
    <p><strong>Current price: { props.price }</strong></p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={ () => props.ingredientAdded( ctrl.type )}
        removed={ () => props.ingredientRemoved( ctrl.type )}
        disabled= { props.disabled[ctrl.type] }
      />
    ))}
  </div>
);

export default buildControls;