import { ChangeEventHandler, FocusEventHandler, useRef, useState } from 'react';

const useInput = (validator: (inputVale: string) => boolean) => {
  const [inputValue, setInputValue] = useState('');
  const [inputTouched, setInputTouched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const isInputValid = validator(inputValue);
  const hasError = !isInputValid && inputTouched;

  const valueChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  const inputBlurHandler: FocusEventHandler<HTMLInputElement> = () => {
    setInputTouched(true);
  };

  const focusHandler = () => {
    setInputTouched(true);
    if (inputRef.current) inputRef.current.focus();
  };

  const reset = () => {
    setInputValue('');
    setInputTouched(false);
  };

  return {
    inputValue,
    isInputValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
    inputRef,
    focusHandler,
  };
};

export default useInput;
