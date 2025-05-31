import { Outlet, Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  // Puedes verificar si existe un token o un usuario válido
  const token = localStorage.getItem('token'); // o 'usuario'
  return !!token;
};

export default function PrivateRoutes() {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/Login" />;
}
