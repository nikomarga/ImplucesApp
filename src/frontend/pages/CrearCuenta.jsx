import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import rocket from '../assets/images/rocket2.png';
import axios from 'axios';
import './login.css'; // reutilizamos los estilos del login

export default function CrearCuenta() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    primerNombre: '',
    primerApellido: '',
    sede: '',
    fechaNacimiento: '',
    escuela: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      usuario: `${formData.primerNombre}${formData.primerApellido}`.toLowerCase(),
      sede: formData.sede,
      fechaNacimiento: formData.fechaNacimiento,
      correo: formData.email,
      password: formData.password,
      programa: formData.escuela
    };

    try {
      const response = await axios.post('/usuarios', payload);
      console.log('Respuesta del servidor:', response.data);
      alert('Cuenta creada exitosamente');
      navigate('/perfil');
    } catch (error) {
      console.error('Error al crear cuenta:', error.response?.data || error.message);
      alert('Ocurrió un error al crear la cuenta. Intenta nuevamente.');
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
            <input type="text" placeholder="Primer Nombre" id="primerNombre" required onChange={handleChange} />
            <input type="text" placeholder="Primer Apellido" id="primerApellido" required onChange={handleChange} />

            <select id="sede" value={formData.sede} onChange={handleChange} required>
              <option value="" disabled>Seleccione su Sede</option>
              <option value="Medellín">Medellín</option>
              <option value="Bello">Bello</option>
              <option value="Rio Negro">Rio Negro</option>
              <option value="La Pintada">La Pintada</option>
              <option value="Apartado">Apartado</option>
              <option value="Bogotá">Bogotá</option>
            </select>

            <input type="date" id="fechaNacimiento" required onChange={handleChange} />

            <select id="escuela" value={formData.escuela} onChange={handleChange} required>
              <option value="" disabled >Seleccione la Escuela</option>
              <option value="Nuevas Tecnologías">Nuevas Tecnologías</option>
              <option value="Industrias Creativas">Industrias Creativas</option>
              <option value="Gastronomía y Turismo">Gastronomía y Turismo</option>
              <option value="Desarrollo Empresarial">Desarrollo Empresarial</option>
              <option value="Salud y Cuidado">Salud y Cuidado</option>
            </select>

            <input type="email" placeholder="Correo electrónico" id="email" required onChange={handleChange} />
            <input type="password" placeholder="Contraseña" id="password" required onChange={handleChange} />

            <button type="submit">Crear Cuenta</button>
          </form>
        </div>
      </div>
    </div>
  );
}

