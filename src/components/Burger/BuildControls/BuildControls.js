import React from "react";

import styles from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
  {label: 'Bacon', type: 'bacon'},
];

const buildControls = (prop) => (
  <div className={styles.BuildControls} id='buildControls'>
    {controls.map(ctrl => (
      <BuildControl key={ctrl.label} label={ctrl.label}/>
    ))}
  </div>
);

export default buildControls;