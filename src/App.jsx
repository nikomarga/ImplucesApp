import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './admin/pages/Dashboard';
import AdminPage from './admin/pages/AdminPage';
import ReportsPage from './admin/pages/ReportsPage';
import StudentPage from './admin/pages/StudentPage';
import Perfil from './frontend/pages/Perfil';
import Login from './frontend/pages/Login';
import CrearCuenta from './frontend/pages/CrearCuenta';
import AgregarServicio from './frontend/pages/AgregarServicio';
import Nosotros from './frontend/pages/Nosotros';
import Contactanos from './frontend/pages/Contactanos';
import MainPage from './frontend/pages/MainPage';
import Footer from './frontend/components/Footer';
import NotFoundPage from './frontend/pages/NotFoundPage';

/* Logic Components */
import PrivateRoutes from './components/auth/PrivateRoutes';
import PublicRoutes from './components/auth/PublicRoutes';
import RoleRoutes from './components/auth/RoleRoutes';

function App() {
  return (
    <Router>
      
      <Routes>
        {/* Default redirect to Login */}
        <Route path="/" element={<Navigate to="/Login" />} />

        {/* Public Routes */}
        <Route element={<PublicRoutes />}>
          <Route path="/Login" element={<Login />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Contactanos" element={<Contactanos />} />
          <Route path="/CrearCuenta" element={<CrearCuenta />} />
          <Route path="/MainPage" element={<MainPage />} />
        </Route>

        {/* Private + Role-protected Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoutes>
              <RoleRoutes allowedRoles={['admin', 'student']}>
                <Dashboard />
              </RoleRoutes>
            </PrivateRoutes>
          }
        />

        <Route
          path="/dashboard/reports"
          element={
            <PrivateRoutes>
              <RoleRoutes allowedRoles={['admin', 'student']}>
                <ReportsPage />
              </RoleRoutes>
            </PrivateRoutes>
          }
        />

        <Route
          path="/dashboard/admin"
          element={
            <PrivateRoutes>
              <RoleRoutes allowedRoles={['admin']}>
                <AdminPage />
              </RoleRoutes>
            </PrivateRoutes>
          }
        />

        <Route
          path="/dashboard/student"
          element={
            <PrivateRoutes>
              <RoleRoutes allowedRoles={['student']}>
                <StudentPage />
              </RoleRoutes>
            </PrivateRoutes>
          }
        />

        <Route
          path="/perfil"
          element={
            <PrivateRoutes>
              <Perfil />
            </PrivateRoutes>
          }
        />

        <Route
          path="/AgregarServicio"
          element={
            <PrivateRoutes>
              <AgregarServicio />
            </PrivateRoutes>
          }
        />

        {/* 404 Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
        <Footer />
    </Router>
  );
}

export default App;
