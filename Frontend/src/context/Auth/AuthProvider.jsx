/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("jwt"));

  useEffect(() => {
    const storedToken = localStorage.getItem("jwt");

    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const saveToken = (token) => {
    localStorage.setItem("jwt", token);
    setToken(token);
  };

  const clearToken = () => {
    localStorage.removeItem("jwt");
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        saveToken,
        token,
        clearToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
