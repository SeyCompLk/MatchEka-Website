import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { InputProps } from '../../types';

import classes from './Input.module.css';

const Input = forwardRef((props: InputProps, ref) => {
  const inputRef = useRef<HTMLInputElement>();

  const activate = () => {
    inputRef.current?.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <>
      {props.label && <label>{props.label}</label>}
      <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        //ref={inputRef}
        className={classes.Input}
        style={props.style}
      />
    </>
  );
});

export default Input;
