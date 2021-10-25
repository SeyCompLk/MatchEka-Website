import React from 'react';
import Input from '../UI/Input';
import { InputProps } from '../../types';

const Form = ({ validators }: { validators: InputProps[] }) => {
  return (
    <>
      {validators.map((validator) => {
        return <Input {...validator} ref={validator.ref} />;
      })}
    </>
  );
};

export default Form;
