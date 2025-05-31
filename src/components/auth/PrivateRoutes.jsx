import { Outlet, Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  const usuario = localStorage.getItem('usuario');
  return !!usuario; // Devuelve true si hay un usuario en localStorage
};

export default function PrivateRoutes() {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/Login" replace />;
}