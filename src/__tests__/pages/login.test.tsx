import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../../pages/Login';

afterAll(() => {
  cleanup();
});

describe('Intergration tests of /login', () => {
  test('Should match snapshot', () => {
    const LoginPage = render(<Login isAdmin={false} />, {
      wrapper: MemoryRouter,
    });
    expect(LoginPage).toMatchSnapshot();
  });

  test('Should show an error when email is invalid after typing', () => {
    const { queryByPlaceholderText, queryByText } = render(
      <Login isAdmin={false} />,
      {
        wrapper: MemoryRouter,
      }
    );
    const emailInput = queryByPlaceholderText('Enter your email') as Element;
    expect(queryByText('Enter a valid email address')).not.toBeInTheDocument();
    fireEvent.change(emailInput, {
      target: {
        value: 'user',
      },
    });

    fireEvent.blur(emailInput);
    expect(queryByText('Enter a valid email address')).toBeInTheDocument();
  });

  test('Should show an error when password is invalid after typing', () => {
    const { queryByPlaceholderText, queryByText } = render(
      <Login isAdmin={false} />,
      {
        wrapper: MemoryRouter,
      }
    );
    const pwdInput = queryByPlaceholderText('Enter your password') as Element;
    expect(queryByText('Enter a valid password')).not.toBeInTheDocument();
    fireEvent.change(pwdInput, {
      target: {
        value: 'pwd',
      },
    });

    fireEvent.blur(pwdInput);
    expect(queryByText('Enter a valid password')).toBeInTheDocument();
  });

  test('Should show an error in email if button is clicked without entering a single char', () => {
    const { queryByRole, queryByText } = render(<Login isAdmin={false} />, {
      wrapper: MemoryRouter,
    });
    const button = queryByRole('button') as Element;
    expect(queryByText('Enter a valid email address')).not.toBeInTheDocument();
    fireEvent.click(button);
    expect(queryByText('Enter a valid email address')).toBeInTheDocument();
  });
});
