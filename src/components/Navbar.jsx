import "./Navbar.css"
import rocket from '../assets/images/rocket2.png';
export default function Navbar() {
  return (
    <header className="container-fluid py-3 d-flex header justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <img src={rocket}  alt="Logo" className="me-2" style={{ width: '70px' }} />
        <div>
          <h1 className="m-0 fw-bold" style={{ fontSize: '2.2rem' }}>
            IMPUL<span style={{ color: '#ec008c' }}>CES</span>
          </h1>
          <p className="m-0 text-uppercase" style={{ fontSize: '0.75rem', color: '#ec008c' }}>
            Conectando Talento en CESDE
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center flex-grow-1">
        <button className="btn btn-primary me-3" style={{ fontSize: '1.2rem', minWidth: '9rem', backgroundColor: '#ec008c', border: 'none' }}>
          Sobre Nosotros
        </button>
        <button className="btn btn-primary me-3" style={{fontSize: '1.2rem', minWidth: '9rem', backgroundColor: '#ec008c', border: 'none' }}>
          Contáctanos
        </button>
      </div>
      
      <div className="text-center">
        <img
          src="imagenes/nikoleee.jpg"
          alt="Perfil"
          className="rounded-circle"
          style={{ width: '50px', height: '50px', objectFit: 'cover' }}/>
        <p className="m-0" style={{ fontSize: '0.8rem' }}>Mi Perfil</p>
      </div>
    </header>
  )
}
