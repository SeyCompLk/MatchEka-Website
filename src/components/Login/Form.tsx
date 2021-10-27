import React from 'react';
import Input from '../UI/Input';
import { InputProps } from '../../types';

const Form = ({ email, pwd }: { email: InputProps; pwd: InputProps }) => {
  return (
    <>
      <Input {...email} />
      <Input {...pwd} />
    </>
  );
};

export default Form;
