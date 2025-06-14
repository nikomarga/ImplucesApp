import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './../components/Navbar';
import "./AgregarServicios.css"; 

export default function AgregarServicio() {
  const navigate = useNavigate();

  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const correoUsuario = usuario?.correo || ""; 
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagenes, setImagenes] = useState([]); 

  const handleImagenes = (e) => {
    const files = Array.from(e.target.files);
    setImagenes(prev => [...prev, ...files]); 
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const publicarEmprendimiento = async () => {
    const emprendimientoData = {
      nombreServicio: nombre,
      categoriaServicio: categoria,
      descripcionServicio: descripcion,

      img1: imagenes[0] ? "URL_IMAGEN_1_PLACEHOLDER" : "", 
      img2: imagenes[1] ? "URL_IMAGEN_2_PLACEHOLDER" : "",
      img3: imagenes[2] ? "URL_IMAGEN_3_PLACEHOLDER" : "",
      img4: imagenes[3] ? "URL_IMAGEN_4_PLACEHOLDER" : "",
      img5: imagenes[4] ? "URL_IMAGEN_5_PLACEHOLDER" : "",
    };

    const requestBody = {
      emprendimiento: emprendimientoData,
      correoUsuario: correoUsuario 
    };

    console.log("Sending JSON:", JSON.stringify(requestBody, null, 2));

    try {
      const url = `https://impulces-backend-724298271244.us-central1.run.app/emprendimientos?correoUsuario=${encodeURIComponent(correoUsuario)}`;

      const res = await fetch(url, { 
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody) 
      });

      if (res.ok) {
        alert("¡Emprendimiento publicado exitosamente!");
        return true;
      } else {
        const errorText = await res.text();
        console.error("Error al publicar emprendimiento:", res.status, errorText);
        alert("Error al publicar: " + errorText);
        return false;
      }
    } catch (err) {
      console.error("Error de conexión:", err);
      alert("Error de conexión con el servidor");
      return false;
    }
  };

  const handlePublicarYRedirigir = async () => {
    const exito = await publicarEmprendimiento();
    if (exito) {
      handleNavigation('/MainPage');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-4">
        <div className="text-center mb-4">
          <button
            className="btn btn-pink px-4 py-2"
            onClick={handlePublicarYRedirigir}
          >
            <i className="bi bi-send-fill me-2"></i> Publicar
          </button>
        </div>

        <div className="card p-4 shadow-sm">
          <div className="row mb-3">
            <div className="col-md-6 mb-3 mb-md-0">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre de tu emprendimiento"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <select
                className="form-control"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="" disabled>Selecciona una categoría</option>
                <option value="educacion">Educación</option>
                <option value="belleza">Belleza</option>
                <option value="comida">Comida</option>
                <option value="ocio">Ocio</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Describe tu servicio aquí"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
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
                <img src={URL.createObjectURL(img)} alt={`preview-${index}`} className="img-thumbnail" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
