import React from 'react';
import { FaFilter } from 'react-icons/fa';  // Asegúrate de importar FaFilter

export default function Buscar() {
  return (
    <div className="px-3 py-2">
      <div className="mb-3">
        <h6><FaFilter className="me-2" /> Sede</h6>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="medellin" />
          <label className="form-check-label" htmlFor="medellin">Medellín</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="bello" />
          <label className="form-check-label" htmlFor="bello">Bello</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="rio" />
          <label className="form-check-label" htmlFor="rio">Río Negro</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="pintada" />
          <label className="form-check-label" htmlFor="pintada">La Pintada</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="apartado" />
          <label className="form-check-label" htmlFor="apartado">Apartadó</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="bogota" />
          <label className="form-check-label" htmlFor="bogota">Bogotá</label>
        </div>
      </div>

      <div>
        <h6><FaFilter className="me-2" /> Clasificación</h6>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="educacion" />
          <label className="form-check-label" htmlFor="educacion">Educación</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="belleza" />
          <label className="form-check-label" htmlFor="belleza">Belleza</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="comida" />
          <label className="form-check-label" htmlFor="comida">Comida</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="ocio" />
          <label className="form-check-label" htmlFor="ocio">Ocio</label>
        </div>
      </div>
    </div>
  );
}

