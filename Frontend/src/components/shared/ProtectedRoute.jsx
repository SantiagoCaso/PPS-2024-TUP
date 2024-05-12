import { useContext } from 'react';
import { AuthContext } from '../../context/Auth/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({route}) => {
  const { token } = useContext(AuthContext);

  return token ? <Outlet /> : <Navigate to={route} />;
};
