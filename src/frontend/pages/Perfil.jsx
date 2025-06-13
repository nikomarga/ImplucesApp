import Navbar from "../components/Navbar";  
import { useState, useEffect } from 'react';
import axios from 'axios';
import './MiPerfil.css';

export default function Perfil() {
  const [imagenPerfil, setImagenPerfil] = useState(null);
  const [usuario, setUsuario] = useState('');
  const [sede, setSede] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [programa, setPrograma] = useState('');
  const [usertype, setUsertype] = useState('student');

  const idUsuario = localStorage.getItem('usuarioId');

  useEffect(() => {
    if (!idUsuario) return;

    axios.get('https://impulces-backend-724298271244.us-central1.run.app/usuarios')
      .then(res => {
        const usuarios = res.data;
        // Buscar el usuario con el idUsuario guardado
        const u = usuarios.find(user => user.id === parseInt(idUsuario));
        if (u) {
          setUsuario(u.usuario || '');
          setSede(u.sede || '');
          setFechaNacimiento(u.fechaNacimiento || '');
          setCorreo(u.correo || '');
          setPassword(u.password || '');
          setPrograma(u.programa || '');
          setUsertype(u.usertype || 'student');
          if (u.profileImg) {
            setImagenPerfil(`data:image/jpeg;base64,${u.profileImg}`);
          }
        } else {
          console.error('Usuario no encontrado en la lista');
        }
      })
      .catch(err => console.error("Error al cargar usuarios:", err));
  }, [idUsuario]);

  const handleImagenChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setImagenPerfil(base64Image);
        localStorage.setItem("imagenPerfil", base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const abrirSelectorImagen = () => {
    document.getElementById('imagenPerfilInput').click();
  };

  const handleGuardarCambios = async (e) => {
    e.preventDefault();

    try {
      const datos = {
        usuario,
        sede,
        fechaNacimiento,
        correo,
        password,
        programa,
        profileImg: imagenPerfil?.split(',')[1], // Elimina "data:image/jpeg;base64,"
        usertype
      };

      await axios.put(`/https://impulces-backend-724298271244.us-central1.run.app/usuarios/${idUsuario}`, datos, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      alert('Usuario actualizado con éxito');
    } catch (error) {
      console.error('Error al actualizar perfil:', error);
      alert('Error al guardar los cambios');
    }
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

        <form className="perfil-form bg-light" onSubmit={handleGuardarCambios}>
          <div className="perfil-header">
            <button type="submit" className="perfil-guardar">
              <i className="bi bi-send-fill me-2"></i> Guardar Cambios
            </button>
            <button
              type="button"
              className="perfil-guardar"
              onClick={abrirSelectorImagen}
            >
              Agregar o cambiar <i className="bi bi-camera-fill me-2"></i>
            </button>
          </div>

          <h2>Información Personal</h2>
          <div className="perfil-inputs">
            <input
              type="text"
              placeholder="Usuario"
              value={usuario}
              onChange={e => setUsuario(e.target.value)}
            />
            <input
              type="text"
              placeholder="Sede"
              value={sede}
              onChange={e => setSede(e.target.value)}
            />
            <input
              type="date"
              placeholder="Fecha de nacimiento"
              value={fechaNacimiento}
              onChange={e => setFechaNacimiento(e.target.value)}
            />
            <input
              type="email"
              placeholder="Correo"
              value={correo}
              onChange={e => setCorreo(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder="Programa"
              value={programa}
              onChange={e => setPrograma(e.target.value)}
            />
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

