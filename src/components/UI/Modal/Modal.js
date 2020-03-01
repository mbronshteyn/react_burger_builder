import React from "react";

import classes from './Modal.module.css'

const modal = (props) => {

  console.log('Modal');

  return (
    <div className={classes.Modal}>
      {props.children}
    </div>
  );
};

export default modal;