import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import rocket from '../assets/images/rocket2.png';
import degradado from '../assets/images/degradado.png';
import './login.css';

export default function CrearCuenta() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    usuario: '',
    sede: '',
    fechaNacimiento: '',
    correo: '',
    password: '',
    programa: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.usuario || !formData.sede || !formData.fechaNacimiento || !formData.correo || !formData.password || !formData.programa) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }

    try {
      const res = await fetch('http://localhost/api/usuarios.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Error al crear la cuenta');
      }

      alert('Cuenta creada exitosamente');
      navigate('/Login');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="color"></div>
        <div className="login-left">
          <img src={rocket} alt="Rocket" />
        </div>
      </div>

      <div className="form-section">
        <div className="login-right">
          <div className="contenedor_titulo">
            <h1 className="login-title">
              IMPUL<span>CES</span>
            </h1>
            <h2 className="eslogan">CONECTA TALENTO EN CESDE</h2>
          </div>

          <p className="login-text">
            ¿Ya estás impulsando tu negocio con nosotros? <a href="/Login">Ingresa a tu cuenta</a>
          </p>

          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Usuario"
              id="usuario"
              required
              onChange={handleChange}
            />
            <select id="sede" required onChange={handleChange} defaultValue="">
              <option value="" disabled>Seleccione su Sede</option>
              <option value="Medellín">Medellín</option>
              <option value="Bello">Bello</option>
              <option value="Rio Negro">Rio Negro</option>
              <option value="La Pintada">La Pintada</option>
              <option value="Apartado">Apartado</option>
              <option value="Bogotá">Bogotá</option>
            </select>
            <input
              type="date"
              id="fechaNacimiento"
              required
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              id="correo"
              required
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Contraseña"
              id="password"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Programa"
              id="programa"
              required
              onChange={handleChange}
            />
            <button type="submit">
              Crear Cuenta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
