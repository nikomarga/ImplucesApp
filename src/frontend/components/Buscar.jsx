import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaFilter } from 'react-icons/fa';

export default function Buscar() {
  // Estado para sedes y clasificaciones seleccionadas
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

  const [emprendimientos, setEmprendimientos] = useState([]);

  // Manejar cambio de checkboxes para sedes
  const handleSedeChange = (e) => {
    setSedes({
      ...sedes,
      [e.target.id]: e.target.checked
    });
  };

  // Manejar cambio de checkboxes para clasificaciones
  const handleClasificacionChange = (e) => {
    setClasificaciones({
      ...clasificaciones,
      [e.target.id]: e.target.checked
    });
  };

  // Función para obtener emprendimientos con filtros aplicados
  const fetchEmprendimientos = async () => {
    try {
      const response = await axios.get('http://localhost:8000/emprendimientos');
      let data = response.data;

      // Filtrar por sedes (suponiendo que "sede" esté en el objeto emprendimiento)
      const sedesSeleccionadas = Object.keys(sedes).filter(key => sedes[key]);
      if (sedesSeleccionadas.length > 0) {
        data = data.filter(e => sedesSeleccionadas.includes(e.sede)); // Ajusta según tu estructura
      }

      // Filtrar por clasificaciones (categoriaServicio)
      const clasificacionesSeleccionadas = Object.keys(clasificaciones).filter(key => clasificaciones[key]);
      if (clasificacionesSeleccionadas.length > 0) {
        data = data.filter(e => clasificacionesSeleccionadas.includes(e.categoriaServicio.toLowerCase()));
      }

      setEmprendimientos(data);
    } catch (error) {
      console.error('Error al obtener emprendimientos:', error);
    }
  };

  // Ejecutar fetch cuando cambien filtros
  useEffect(() => {
    fetchEmprendimientos();
  }, [sedes, clasificaciones]);

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

      <div className="mt-4">
        <h5>Emprendimientos encontrados: {emprendimientos.length}</h5>
        <ul>
          {emprendimientos.map(e => (
            <li key={e.id}>
              <strong>{e.nombreServicio}</strong> - {e.categoriaServicio} - {e.sede}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
