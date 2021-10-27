import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Input from './Input';

afterAll(() => {
  cleanup();
});

let dummy = {
  type: 'text',
  value: '',
  onChange: () => {},
  onBlur: () => {},
  placeholder: 'Enter your password',
  hasError: false,
  errorMessage: 'Enter a valid password',
  label: undefined,
  style: {},
};

describe('Unit tests of Input Component', () => {
  test('Should not showan error when no error', () => {
    const { queryByTestId } = render(<Input {...dummy} />);
    expect(queryByTestId('error-message')).not.toBeInTheDocument();
  });
  test('Should show an error when there is an error', () => {
    dummy.hasError = true;
    const { queryByTestId } = render(<Input {...dummy} />);
    expect(queryByTestId('error-message')).toBeInTheDocument();
    expect(queryByTestId('error-message')?.innerHTML).toBe(dummy.errorMessage);
  });
});
