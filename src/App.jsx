import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './admin/pages/Dashboard';
import Perfil from './frontend/pages/Perfil';
import Login from './frontend/pages/Login';
import AgregarServicio from './frontend/pages/AgregarServicio'
import Nosotros from './frontend/pages/Nosotros';
import Contactanos from './frontend/pages/Contactanos';

import Navbar from './frontend/components/Navbar';
import Hero from './frontend/components/Hero';
import Services from './frontend/components/Services';
import Footer from './frontend/components/Footer';
import Buscar from './frontend/components/Buscar';

function App() {

  return (
    
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar/>
              <div className="container-fluid">
                <div className="row">
                  {/* Columna 20% */}
                  <div className="col-12 col-md-2 col-lg-2 p-3 ">
                    <Buscar />
                  </div>

                  {/* Columna 80% */}
                  <div className="col-12 col-md-10 col-lg-10 p-3 bg-light">
                    <Hero />
                    <Services />
                  </div>
                </div>
              </div>
            </>
          }/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AgregarServicio" element={<AgregarServicio/>}/>
          <Route path='/Nosotros' element={<Nosotros/>}/>
          <Route path='/Contactanos' element={<Contactanos/>}/>
        </Routes>
        <Footer />
      </Router>
  );
}

export default App
