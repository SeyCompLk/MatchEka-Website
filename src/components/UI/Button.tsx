import React from 'react';
import { ButtonProps } from '../../types';
import classes from './Button.module.css';

const Button = (props: ButtonProps) => {
  return (
    <button type={props.type} style={props.style} className={classes.Button}>
      {props.children}
    </button>
  );
};

export default Button;
