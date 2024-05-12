/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    getToken();
    if (token) {
      setIsAuthenticated(true);
    }
  };
  const clearToken = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  const getToken = () => {
    let token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      return token;
    }
    return null;
  };

  const saveUserToken = (token) => {
    setToken(token);
    localStorage.setItem('token', JSON.stringify(token));
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider
      value={{
        clearToken,
        saveUserToken,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
