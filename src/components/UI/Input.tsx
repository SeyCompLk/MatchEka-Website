import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { InputProps } from '../../types';

import classes from './Input.module.css';

const Input = forwardRef((props: InputProps, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const activate = () => {
    inputRef.current?.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div className={classes.Container} style={props.style}>
      {props.label && <label>{props.label}</label>}
      <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        ref={inputRef}
        className={classes.Input}
        placeholder={props.placeholder}
      />
      {props.hasError && (
        <div className="error" data-testid="error-message">
          {props.errorMessage}
        </div>
      )}
    </div>
  );
});

export default Input;
