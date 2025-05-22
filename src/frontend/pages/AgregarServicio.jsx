import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import React, { useState } from 'react';
import "./AgregarServicios.css"
export default function AgregarServicio() {

  const [imagenes, setImagenes] = useState([]);
  const handleImagenes = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map(file => URL.createObjectURL(file));
    setImagenes(prev => [...prev, ...previews]);
  };

  return (
    <>
      <Navbar />
      <div className="container my-4">
        <div className="text-center mb-4">
          <button className="btn btn-pink px-4 py-2">
            <i className="bi bi-send-fill me-2"></i> Publicar
          </button>
        </div>

        <div className="card p-4 shadow-sm">
          <div className="row mb-3">
            <div className="col-md-6 mb-3 mb-md-0">
              <input type="text" className="form-control" placeholder="Nombre de tu emprendimiento" />
            </div>
            <div className="col-md-6">
              <select className="form-control" defaultValue="">
                <option value="" disabled>Selecciona una categoría</option>
                <option value="educacion">Educación</option>
                <option value="belleza">Belleza</option>
                <option value="comida">Comida</option>
                <option value="ocio">Ocio</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <textarea className="form-control" rows="4" placeholder="Describe tu servicio aqui"></textarea>
          </div>

          <div className="mb-3">
            <label className="btn btn-secondary">
              <i className="bi bi-plus-circle me-2"></i> Agrega fotos
              <input
                type="file"
                multiple
                accept="image/*"
                className="d-none"
                onChange={handleImagenes}
              />
            </label>
          </div>

          <div className="row">
            {imagenes.map((img, index) => (
              <div key={index} className="col-4 col-md-2 mb-3">
                <img src={img} alt={`preview-${index}`} className="img-thumbnail" />
              </div>
            ))}
          </div>
        </div>
      </div>  
    </>
  );
}
