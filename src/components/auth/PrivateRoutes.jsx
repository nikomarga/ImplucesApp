import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  const usuario = localStorage.getItem('usuario');
  return !!usuario;
};

export default function PrivateRoutes({ children }) {
  return isAuthenticated() ? children : <Navigate to="/Login" replace />;
}