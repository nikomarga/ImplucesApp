import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import rocket from '../assets/images/rocket2.png';
import degradado from '../assets/images/degradado.png';
import './login.css';

export default function crearCuenta() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    tipoDocumento: '',
    numeroDocumento: '',
    sede: '',
    fechaNacimiento: '',
    escuela: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Cuenta creada exitosamente');
    navigate('/dashboard'); // o como quieras redirigir
  };

  return (
    <div className="login-container">
      {/* Sección imagen */}
        <div className="login-wrapper">
        <div class="color">
        </div>
        <div className="login-left">
            <img src={rocket} alt="Rocket" />
        </div>
        </div>

      {/* Sección formulario */}
    <div className='form-section'>
      <div className="login-right">
        <div className="contenedor_titulo">
          <h1 className="login-title">
            IMPUL<span>CES</span>
          </h1>
          <h2 className="eslogan">CONECTA TALENTO EN CESDE</h2>
        </div>
        
        <p className="login-text">
          ¿Ya estás impulsando tu negocio con nosotros? <a href="/Login">Ingreasa a tu cuenta</a>
        </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Primer Nombre" id="primerNombre" required onChange={handleChange} />
              <input type="text" placeholder="Segundo Nombre" id="segundoNombre" onChange={handleChange} />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Primer Apellido" id="primerApellido" required onChange={handleChange} />
              <input type="text" placeholder="Segundo Apellido" id="segundoApellido" required onChange={handleChange} />
            </div>
            <div className="form-group">
              <select id="tipoDocumento" required onChange={handleChange}>
                <option value="" disabled selected>Tipo de documento</option>
                <option value="CC">CC</option>
                <option value="CE">CE</option>
                <option value="TI">TI</option>
                <option value="PP">PP</option>
                <option value="PPT">PPT</option>
              </select>
              <input type="number" placeholder="Número de Documento" id="numeroDocumento" required onChange={handleChange} />
            </div>
            <div className="form-group">
              <select id="sede" required onChange={handleChange}>
                <option value="" disabled selected>Seleccione su Sede</option>
                <option value="Medellín">Medellín</option>
                <option value="Bello">Bello</option>
                <option value="Rio Negro">Rio Negro</option>
                <option value="La Pintada">La Pintada</option>
                <option value="Apartado">Apartado</option>
                <option value="Bogotá">Bogotá</option>
              </select>
              <input type="date" id="fechaNacimiento" required onChange={handleChange} />
            </div>
            <div className="form-group">
              <select id="escuela" required onChange={handleChange}>
                <option value="" disabled selected>Seleccione la Escuela</option>
                <option value="Nuevas Tecnologías">Nuevas Tecnologías</option>
                <option value="Industrias Creativas">Industrias Creativas</option>
                <option value="Gastronomía y Turismo">Gastronomía y Turismo</option>
                <option value="Desarrollo Empresarial">Desarrollo Empresarial</option>
                <option value="Salud y Cuidado">Salud y Cuidado</option>
              </select>
            </div>
            <div className="form-group">
              <input type="email" placeholder="Correo electrónico" id="email" required onChange={handleChange} />
              <input type="password" placeholder="Contraseña" id="password" maxLength="4" required onChange={handleChange} />
            </div>
            <button type="submit" className="submit-btn">Crear Cuenta</button>
          </form>
        </div>
      </div>
    </div>
  );
}