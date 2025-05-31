import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './admin/pages/Dashboard';
import AdminPage from './admin/pages/AdminPage';
import ReportsPage from './admin/pages/ReportsPage';
import StudentPage from './admin/pages/StudentPage';
import Perfil from './frontend/pages/Perfil';
import Login from './frontend/pages/Login';
import CrearCuenta from './frontend/pages/CrearCuenta';
import AgregarServicio from './frontend/pages/AgregarServicio'
import Nosotros from './frontend/pages/Nosotros';
import Contactanos from './frontend/pages/Contactanos';
import MainPage from './frontend/pages/MainPage';
import Navbar from './frontend/components/Navbar';
import Hero from './frontend/components/Hero';
import Services from './frontend/components/Services';
import Footer from './frontend/components/Footer';
import Buscar from './frontend/components/Buscar';
import NotFoundPage from './frontend/pages/NotFoundPage'

/* Logic Components */
import PrivateRoutes from './components/auth/PrivateRoutes'
import PublicRoutes from './components/auth/PublicRoutes'
import RoleRoutes from './components/auth/RoleRoutes'

function App() {

  return (
    
      <Router>
        <Routes>
              <Route path="/" element={<Navigate to="/Login" />} />
          {/* Rutas Publicas */}
          <Route element={<PublicRoutes/>}>
              <Route path="/Login" element={<Login />} />
              <Route path='/Nosotros' element={<Nosotros/>}/>
              <Route path='/Contactanos' element={<Contactanos/>}/>
              <Route path="/CrearCuenta" element={<CrearCuenta />} />
              <Route path="/MainPage" element={<MainPage/>}/>
          </Route>

          {/* Rutas Privadas */}
          <Route element={<PrivateRoutes/>}>
              <Route path="/dashboard" element={
                <RoleRoutes allowedRoles={["admin", "student"]}>
                  <Dashboard/>
                </RoleRoutes>
              }/>

              <Route path="/dashboard/reports" element={
                <RoleRoutes allowedRoles={["admin", "student"]}>
                  <ReportsPage/>
                </RoleRoutes>
              }/>

              <Route path="/dashboard/admin" element={
                <RoleRoutes allowedRoles={["admin"]}>
                  <AdminPage/>
                </RoleRoutes>
              }/>

              <Route path="/dashboard/student" element={
                <RoleRoutes allowedRoles={["student"]}>
                  <StudentPage/>
                </RoleRoutes>
              }/>
                  <Route path="/perfil" element={<Perfil />} />
                  <Route path="/AgregarServicio" element={<AgregarServicio/>}/>
          </Route>

          {/* Rutas 404 */}
          <Route path='*' element={<NotFoundPage/>}/>

        </Routes>
        <Footer />
      </Router>
  );
}

export default App
