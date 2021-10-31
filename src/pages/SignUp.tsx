import React, { useState, FormEventHandler, useContext } from 'react';
import Form from '../components/Register/Form';
import Brand from '../components/Login/Brand';
import Button from '../components/UI/Button';
import useInput from '../hooks/useInput';
import { InputProps } from '../types';
import { Link } from 'react-router-dom';
import classes from '../styles/Register.module.css';
import { authContext } from '../context/authContext';

const SignUp = (props: { isAdmin: boolean }) => {
  const [message, setMessage] = useState<string | null>(null);
  const numberValidator = useInput(
    (inputVal) => inputVal.trim().length === 10 && inputVal.startsWith('0')
  );
  const emailValidator = useInput(
    (inputVal) => inputVal.includes('@') && !inputVal.includes(' ')
  );
  const nameValidator = useInput((inputVal) => inputVal.trim().length > 0);
  const pwdValidator = useInput((inputVal) => inputVal.trim().length > 6);
  const secondPwdValidator = useInput(
    (inputVal) => inputVal === pwdValidator.inputValue
  );
  const validators: InputProps[] = [
    {
      type: 'text',
      value: numberValidator.inputValue,
      onChange: numberValidator.valueChangeHandler,
      onBlur: numberValidator.inputBlurHandler,
      placeholder: 'Enter your contact number',
      hasError: numberValidator.hasError,
      errorMessage: 'Enter a valid contact number',
      ref: numberValidator.inputRef,
      label: undefined,
      style: {
        marginBottom: '0px',
      },
    },
    {
      type: 'text',
      value: emailValidator.inputValue,
      onChange: emailValidator.valueChangeHandler,
      onBlur: emailValidator.inputBlurHandler,
      placeholder: 'Enter your email',
      hasError: emailValidator.hasError,
      errorMessage: 'Enter a valid email address',
      ref: emailValidator.inputRef,
      label: undefined,
      style: {
        marginBottom: '0px',
      },
    },
    {
      type: 'text',
      value: nameValidator.inputValue,
      onChange: nameValidator.valueChangeHandler,
      onBlur: nameValidator.inputBlurHandler,
      placeholder: 'Enter your name',
      hasError: nameValidator.hasError,
      errorMessage: 'Length of the name must be valid',
      ref: nameValidator.inputRef,
      label: undefined,
      style: {
        marginBottom: '0px',
      },
    },
    {
      type: 'text',
      value: pwdValidator.inputValue,
      onChange: pwdValidator.valueChangeHandler,
      onBlur: pwdValidator.inputBlurHandler,
      placeholder: 'Enter your password',
      hasError: pwdValidator.hasError,
      errorMessage: 'Enter a valid password',
      ref: pwdValidator.inputRef,
      label: undefined,
      style: {
        marginBottom: '0px',
      },
    },
    {
      type: 'text',
      value: secondPwdValidator.inputValue,
      onChange: secondPwdValidator.valueChangeHandler,
      onBlur: secondPwdValidator.inputBlurHandler,
      placeholder: 'Re-enter password',
      hasError: secondPwdValidator.hasError,
      errorMessage: 'Passwords are not matching',
      ref: secondPwdValidator.inputRef,
      label: undefined,
      style: {
        marginBottom: '0px',
      },
    },
  ];

  const ctx = useContext(authContext);

  const submitFormHandler: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!numberValidator.isInputValid) return numberValidator.focusHandler();
    if (!emailValidator.isInputValid) return emailValidator.focusHandler();
    if (!nameValidator.isInputValid) return nameValidator.focusHandler();
    if (!pwdValidator.isInputValid) return pwdValidator.focusHandler();
    if (!secondPwdValidator.isInputValid)
      return secondPwdValidator.focusHandler();

    const body = {
      email: emailValidator.inputValue,
      password: pwdValidator.inputValue,
      contactNo: numberValidator.inputValue,
    };

    const url = `${process.env.REACT_APP_API_ENDPOINT}${
      props.isAdmin ? 'admin' : 'user'
    }/register`;
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (data.success) {
      ctx.login(data.token, false, data.expiresOn);
    } else {
      setMessage(data.message);
    }
  };
  return (
    <>
      <div className={classes.NavCont}>About</div>
      <div className={classes.Container}>
        <div className={classes.BrandBar}>
          <Brand />
        </div>
        <div className={classes.MiddleBar}></div>
        <form className={classes.FormBar} onSubmit={submitFormHandler}>
          <div className={classes.Topic}>
            <h1>Register</h1>
          </div>
          <Form validators={validators} />
          {message && <div className="error">{message}</div>}
          <Button type="submit" style={undefined}>
            <span>Register</span>
          </Button>

          <div className={classes.CreateCont}>
            <h1>Already have an account?</h1>
            <Link to="/user/login">login</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
