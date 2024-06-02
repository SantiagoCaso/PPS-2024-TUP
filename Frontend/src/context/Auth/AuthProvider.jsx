/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
// Asegúrate de usar 'jwt-decode' correctamente
import { jwtDecode } from 'jwt-decode';
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isAuthenticated, setIsAuthenticated] = useState();

  useEffect(() => {
    console.log(token);
    verifyUserSession();
  }, []);

  const verifyUserSession = () => {
    const storedToken = getToken();
    if (!storedToken) {
      handleLogout();
      return;
    }
    try {
      const decodedToken = jwtDecode(storedToken); // Decodificar el token almacenado
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        handleLogout();
        console.log('Expiro el token y se cerro sesion');
      } else {
        console.log('token valido');
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Error decoding token:', error);
      handleLogout();
    }
  };

  const handleLogout = () => {
    clearToken();
    setIsAuthenticated(false);
  };

  // const checkAuth = () => {
  //   if (getToken()) {
  //     setIsAuthenticated(true);
  //   }
  // };

  const getToken = () => {
    let storedToken = localStorage.getItem('token');
    return storedToken;
  };

  const clearToken = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  const saveUserToken = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider
      value={{
        clearToken,
        saveUserToken,
        isAuthenticated,
        handleLogout,
        token,
        verifyUserSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
