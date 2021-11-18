/*eslint-env jest*/
import { render, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../pages/Login';

afterAll(() => {
  cleanup();
});

let storage: any = {};

window.localStorage.setItem = jest.fn((key: string, value: any) => {
  storage[key] = value;
});

window.localStorage.getItem = jest.fn((key: string) => storage[key]);

window.localStorage.removeItem = jest.fn((key: string) => {
  storage[key] = undefined;
});

describe('Should authContext work properly', () => {
  test('Local storage should not have login data after time exceeds', () => {
    const { queryByRole, queryByPlaceholderText } = render(
      <Login isAdmin={false} />,
      {
        wrapper: MemoryRouter,
      }
    );

    const emailInput = queryByPlaceholderText('Enter your email') as Element;
    const pwdInput = queryByPlaceholderText('Enter your password') as Element;
    const button = queryByRole('button') as Element;

    fireEvent.change(emailInput, {
      target: {
        value: 'shakyaimanjith32@gmail.com',
      },
    });

    fireEvent.change(pwdInput, {
      target: {
        value: 'Shakya2004',
      },
    });

    fireEvent.click(button);
  });
});

export {};
