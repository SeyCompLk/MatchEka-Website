import React, { FormEventHandler, useContext, useState } from 'react';
import useInput from '../hooks/useInput';
import Brand from '../components/Login/Brand';
import Form from '../components/Login/Form';
import Button from '../components/UI/Button';
import classes from '../styles/Login.module.css';
import { InputProps } from '../types';
import { authContext } from '../context/authContext';
import { Link } from 'react-router-dom';

const Login = () => {
  const emailValidator = useInput(
    (inputVal) => inputVal.includes('@') && !inputVal.includes(' ')
  );
  const pwdValidator = useInput((inputVal) => inputVal.trim().length > 6);
  const [message, setMessage] = useState<string | null>(null);
  const validatorArr: { email: InputProps; pwd: InputProps } = {
    email: {
      type: 'text',
      value: emailValidator.inputValue,
      onChange: emailValidator.valueChangeHandler,
      onBlur: emailValidator.inputBlurHandler,
      placeholder: 'Enter your email',
      hasError: emailValidator.hasError,
      errorMessage: 'Enter a valid email address',
      ref: emailValidator.inputRef,
      label: undefined,
      style: {},
    },
    pwd: {
      type: 'text',
      value: pwdValidator.inputValue,
      onChange: pwdValidator.valueChangeHandler,
      onBlur: pwdValidator.inputBlurHandler,
      placeholder: 'Enter your password',
      hasError: pwdValidator.hasError,
      errorMessage: 'Enter a valid password',
      ref: pwdValidator.inputRef,
      label: undefined,
      style: {},
    },
  };

  const ctx = useContext(authContext);

  const submitFormHandler: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!emailValidator.isInputValid) return emailValidator.focusHandler();

    if (!pwdValidator.isInputValid) return pwdValidator.focusHandler();

    const body = {
      email: emailValidator.inputValue,
      password: pwdValidator.inputValue,
    };

    const url = `${process.env.REACT_APP_API_ENDPOINT}user/login`;
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
            <h1>Login</h1>
            <p>Welcome to match eka!</p>
          </div>
          <Form email={validatorArr.email} pwd={validatorArr.pwd} />
          {message && <div className="error">{message}</div>}
          <Button type="submit" style={undefined} data-testid="submit-button">
            <span>Login</span>
          </Button>

          <div className={classes.CreateCont}>
            <h1>Don't have an account?</h1>
            <Link to="/user/register">Create an account</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
