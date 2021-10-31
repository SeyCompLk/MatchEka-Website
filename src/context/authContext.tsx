import React, { createContext, ReactElement, useEffect, useState } from 'react';
import { authContextTypes } from '../types';

let timer: NodeJS.Timeout;

export const authContext = createContext<authContextTypes>({
  login: () => {},
  logout: () => {},
  token: null,
  isAdmin: false,
});

const calculateRemainingTime: (
  expiryDate: string | null
) => number | undefined = (expiryDate: string | null) => {
  if (expiryDate) {
    const dateNow = new Date().getTime();
    const expirationDate = new Date(expiryDate).getTime();
    const remainingTime = expirationDate - dateNow;

    return remainingTime;
  }
};

const AuthContextProvider = (props: { children: ReactElement }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token')
  );
  const [expiresOn, setExpiresOn] = useState<string | null>(
    localStorage.getItem('expiresOn')
  );
  const [isAdmin, setIsAdmin] = useState<boolean>(
    localStorage.getItem('isAdmin') === 'true'
  );
  const login = (token: string, isAdmin: boolean, expiresOn: string) => {
    localStorage.setItem('token', token);
    localStorage.setItem('isAdmin', isAdmin ? 'true' : 'false');
    localStorage.setItem('expiresOn', expiresOn);
    setToken(token);
    setExpiresOn(expiresOn);
    setIsAdmin(isAdmin);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('expiresOn');
    setToken(null);
    setExpiresOn(null);
    setIsAdmin(false);
    clearTimeout(timer);
  };

  const value: authContextTypes = {
    token,
    login,
    logout,
    isAdmin,
  };

  useEffect(() => {
    const rem = calculateRemainingTime(expiresOn);
    if (token && rem) {
      if (rem <= 1000) {
        logout();
      } else {
        timer = setTimeout(() => {
          if (rem <= 1000) {
            logout();
          }
        }, rem - 1000);
      }
    }
  });
  return (
    <authContext.Provider value={value}>{props.children}</authContext.Provider>
  );
};

export default AuthContextProvider;
