
import { useNavigate } from 'react-router-dom';
import "./Navbar.css"
import rocket from "../assets/images/rocket2.png";
import { useState, useEffect } from 'react';



export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [imagenPerfil, setImagenPerfil] = useState(null);

  const handleNavigation = (path) => {
    navigate(path);
    setOpen(false); // Cierra el menú después de navegar
  };

  useEffect(() => {
  const imagenGuardada = localStorage.getItem("imagenPerfil");
  if (imagenGuardada) {
    setImagenPerfil(imagenGuardada);
  }
}, []);
  return (
    <header className="container-fluid py-3 d-flex header justify-content-between align-items-center bg-white">
      <div className="d-flex align-items-center">
        <img src={rocket}  alt="Logo" className="me-2" style={{ width: '70px' }} />
        <button 
        className='bg-white' 
        style={{border: 'none'}} 
        onClick={() => navigate('/')}>
          <div>
            <h1 className="m-0 fw-bold" style={{ fontSize: '2.2rem' }}>
              IMPUL<span style={{ color: '#ec008c' }}>CES</span>
            </h1>
            <p className="m-0 text-uppercase" style={{ fontSize: '0.75rem', color: '#ec008c' }}>
              Conectando Talento en CESDE
            </p>
          </div>
        </button>
      </div>

      <div className="d-flex justify-content-center align-items-center flex-grow-1">
        <button 
        onClick={() => navigate('/Nosotros')}
        className="btn btn-primary me-3" 
        style={{ fontSize: '1.2rem', minWidth: '9rem', backgroundColor: '#ec008c', border: 'none' }}>
          Sobre Nosotros
        </button>
        <button 
        onClick={() => navigate('/Contactanos')}
        className="btn btn-primary me-3" 
        style={{fontSize: '1.2rem', minWidth: '9rem', backgroundColor: '#ec008c', border: 'none' }}>
          Contáctanos
        </button>
      </div>
      

      {/* Botón de perfil + menú desplegable */}
      <div className="position-relative text-center">
        <button
          onClick={() => setOpen(!open)}
          className="rounded-circle bg-white p-0"
          style={{ width: '54px', height: '54px', border: 'none' }}
        >
        <img
          src={imagenPerfil || "https://via.placeholder.com/150"}
          alt="Perfil"
          className="rounded-circle"
          style={{ width: '50px', height: '50px', objectFit: 'cover' }}
        />
        </button>
        <p className="m-0" style={{ fontSize: '0.8rem' }}>Mi Perfil</p>

        {/* Menú desplegable */}
        {open && (
          <div className="position-absolute bg-white rounded shadow p-2" style={{ top: '65px', right: 0, zIndex: 1000, minWidth: '160px' }}>
            <button onClick={() => handleNavigation('/dashboard')} className="dropdown-item text-start">
              Dashboard
            </button>
            <button onClick={() => handleNavigation('/perfil')} className="dropdown-item text-start">
              Mi Perfil
            </button>
            <button onClick={() => handleNavigation('/Login')} className="dropdown-item text-start">
              Salir
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
