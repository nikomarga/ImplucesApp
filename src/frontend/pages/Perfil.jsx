import Navbar from "../components/Navbar";
import { useState, useEffect } from 'react';
import './MiPerfil.css';

export default function Perfil() {
  const [imagenPerfil, setImagenPerfil] = useState(null);

  useEffect(() => {
    // Al cargar la página, recuperar la imagen desde localStorage
    const imagenGuardada = localStorage.getItem("imagenPerfil");
    if (imagenGuardada) {
      setImagenPerfil(imagenGuardada);
    }
  }, []);

  const handleImagenChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setImagenPerfil(base64Image);
        localStorage.setItem("imagenPerfil", base64Image); // Guardar en localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  const abrirSelectorImagen = () => {
    document.getElementById('imagenPerfilInput').click();
  };

  return (
    <>
      <Navbar />
      <div className="perfil-container bg-light">
        <div className="perfil-avatar-container">
          <img
            src={imagenPerfil || 'https://via.placeholder.com/150'}
            alt="Agrega o cambiar imagen"
            className="perfil-avatar"
          />
          <input
            id="imagenPerfilInput"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImagenChange}
          />

        </div>

        <form className="perfil-form bg-light">
          <div className="perfil-header">
            <button className="perfil-guardar">
              <i className="bi bi-send-fill me-2"></i> Guardar Cambios
            </button>
            <button type="button" className="perfil-guardar" onClick={abrirSelectorImagen}>
               Agregar o cambiar   <i className="bi bi-camera-fill me-2"></i>
            </button>
          </div>
          <h2>Información Personal</h2>
          <div className="perfil-inputs">
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Apellido" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Teléfono" />
            <input type="password" placeholder="Contraseña" value="" readOnly />
            <input type="password" placeholder="Nueva Contraseña" />
          </div>

          <h3>Notificaciones</h3>
          <div className="perfil-notificaciones">
            <label>
              <span>Recibir novedades de servicios</span>
              <input type="checkbox" />
            </label>
            <label>
              <span>Alertas de msg txt cuando contraten mis servicios</span>
              <input type="checkbox" />
            </label>
          </div>
        </form>
      </div>
    </>
  );
}

