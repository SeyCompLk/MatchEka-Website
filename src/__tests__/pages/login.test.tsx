import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Login from '../../pages/Login';

afterAll(() => {
  cleanup();
});

describe('Intergration tests of /login', () => {
  test('Should match snapshot', () => {
    const LoginPage = render(<Login />);
    expect(LoginPage).toMatchSnapshot();
  });
});
