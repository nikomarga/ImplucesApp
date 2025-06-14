import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Hero() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim() === '') return; // Evita búsqueda vacía
    
    // IMPORTANTE: Con HashRouter, navigate maneja automáticamente la parte del hash.
    // Esta ruta '/buscar' se convierte en '/#/buscar' en la URL.
    // La parte `?query=` es el parámetro que el backend espera como `nombre`.
    navigate(`/buscar?query=${encodeURIComponent(searchText.trim())}`);
  };

  return (
    <>
      <nav className="navbar w-100">
        <div className="container-fluid">
          <form className="d-flex w-100" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              style={{ border: '1px solid #808080', borderRadius: '10px' }}
              type="search"
              placeholder="Escribe aqui el nombre del servicio o producto"
              aria-label="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="submit" className="btn">
              <i className="bi bi-search" style={{ fontSize: '20px' }}></i>
            </button>
          </form>
        </div>
      </nav>

      <div className="navbar w-100">
        <div className="container-fluid d-flex w-100 p-0 m-0">
          <button
            onClick={() => navigate('/AgregarServicio')} // La navegación interna a otras páginas también usa la misma lógica
            type="button"
            className="btn btn-primary w-100 rounded-0 text-start"
            style={{
              fontSize: '17px',
              border: 'none',
              backgroundColor: '#c60078',
              color: '#ffffff',
              borderRadius: '20px',
              margin: '0px 9px 0px 9px',
            }}
          >
            <i className="bi bi-plus me-2" style={{ fontSize: '20px' }}></i>
            Agrega tu servicio / producto aquí
          </button>
        </div>
      </div>
    </>
  );
}
