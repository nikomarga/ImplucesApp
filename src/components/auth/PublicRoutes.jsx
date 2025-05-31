import { Outlet, Navigate } from 'react-router-dom';

// Simula una función para saber si el usuario está autenticado
const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

const PublicRoutes = () => {
  return isAuthenticated() ? <Navigate to="/MainPage" /> : <Outlet />;
};

export default PublicRoutes;