import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Perfil from './pages/Perfil';
import Login from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';
import AgregarServicio from './pages/AgregarServicio'
import Nosotros from './pages/Nosotros';
import Contactanos from './pages/Contactanos';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import Buscar from './components/Buscar'; // Asegúrate que exista este archivo


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
                  <div className="col-12 col-md-2 col-lg-2 p-3 bg-light">
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
