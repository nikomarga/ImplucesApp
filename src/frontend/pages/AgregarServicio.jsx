import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // IMPORTANTE para navegar
import Navbar from './../components/Navbar';
import "./AgregarServicios.css";

export default function AgregarServicio() {
  const navigate = useNavigate();  // Hook para navegación

  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const correoUsuario = usuario?.correo || "";
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagenes, setImagenes] = useState([]);

  // Manejo de imágenes seleccionadas
  const handleImagenes = (e) => {
    const files = Array.from(e.target.files);
    setImagenes(prev => [...prev, ...files]);
  };

  // Función para navegar, aquí quité setOpen porque no está definido
  const handleNavigation = (path) => {
    navigate(path);
  };

  // Función para subir emprendimiento
  const publicarEmprendimiento = async () => {
    const formData = new FormData();
    formData.append("nombreServicio", nombre);
    formData.append("categoriaServicio", categoria);
    formData.append("descripcionServicio", descripcion);
    formData.append("correoUsuario", correoUsuario);

    imagenes.forEach(img => {
      formData.append("imagenes", img);
    });

    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const res = await fetch("/emprendimientos/subir", {
        method: "POST",
        body: formData
      });

      if (res.ok) {
        alert("¡Emprendimiento publicado exitosamente!");
        return true; // Indica que todo salió bien
      } else {
        const error = await res.text();
        alert("Error: " + error);
        return false;
      }
    } catch (err) {
      alert("Error de conexión con el servidor");
      return false;
    }
  };

  // Función que une publicar y navegar
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
