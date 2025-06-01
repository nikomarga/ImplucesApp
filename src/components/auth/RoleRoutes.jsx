import { Navigate } from 'react-router-dom';

const getUserRole = () => {
  const usuarioStr = localStorage.getItem('usuario');
  if (!usuarioStr) return null;
  try {
    const usuario = JSON.parse(usuarioStr);
    return usuario.usertype || null;
  } catch {
    return null;
  }
};

export default function RoleRoutes({ allowedRoles, children }) {
  const userRole = getUserRole();

  if (!userRole) {
    return <Navigate to="/Login" replace />;
  }

  if (allowedRoles.includes(userRole)) {
    return children;
  }

  return <Navigate to="/dashboard" replace />;
}
