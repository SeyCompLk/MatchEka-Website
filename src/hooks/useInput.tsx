import { ChangeEvent, useRef, useState } from 'react';

const useInput = (validator: (inputVale: string) => boolean) => {
  const [inputValue, setInputValue] = useState('');
  const [inputTouched, setInputTouched] = useState(false);
  const inputRef = useRef<HTMLInputElement>();
  const isInputValid = validator(inputValue);
  const hasError = !isInputValid && inputTouched;

  const valueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setInputTouched(true);
  };

  const focusHandler = () => {
    setInputTouched(true);
    inputRef.current?.focus();
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
