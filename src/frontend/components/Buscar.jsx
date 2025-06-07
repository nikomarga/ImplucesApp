import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaFilter } from 'react-icons/fa';

export default function Buscar({ setFiltros }) {
  const [sedes, setSedes] = useState({
    medellin: false,
    bello: false,
    rio: false,
    pintada: false,
    apartado: false,
    bogota: false
  });

  const [clasificaciones, setClasificaciones] = useState({
    educacion: false,
    belleza: false,
    comida: false,
    ocio: false
  });

  useEffect(() => {
    const filtros = {
      sedes: Object.keys(sedes).filter(key => sedes[key]),
      clasificaciones: Object.keys(clasificaciones).filter(key => clasificaciones[key])
    };

    setFiltros(filtros); // << Notifica a MainPage
    localStorage.setItem('filtrosBusqueda', JSON.stringify(filtros));
  }, [sedes, clasificaciones, setFiltros]);

  const handleSedeChange = (e) => {
    setSedes({
      ...sedes,
      [e.target.id]: e.target.checked
    });
  };

  const handleClasificacionChange = (e) => {
    setClasificaciones({
      ...clasificaciones,
      [e.target.id]: e.target.checked
    });
  };

  return (
    <div className="px-3 py-2">
      <div className="mb-3">
        <h6><FaFilter className="me-2" /> Sede</h6>
        {Object.keys(sedes).map(sede => (
          <div className="form-check" key={sede}>
            <input
              className="form-check-input"
              type="checkbox"
              id={sede}
              checked={sedes[sede]}
              onChange={handleSedeChange}
            />
            <label className="form-check-label" htmlFor={sede}>
              {sede.charAt(0).toUpperCase() + sede.slice(1)}
            </label>
          </div>
        ))}
      </div>

      <div>
        <h6><FaFilter className="me-2" /> Clasificación</h6>
        {Object.keys(clasificaciones).map(cat => (
          <div className="form-check" key={cat}>
            <input
              className="form-check-input"
              type="checkbox"
              id={cat}
              checked={clasificaciones[cat]}
              onChange={handleClasificacionChange}
            />
            <label className="form-check-label" htmlFor={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
