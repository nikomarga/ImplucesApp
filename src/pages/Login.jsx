import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import rocket from '../assets/images/rocket2.png';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Validación simple
    if (correo && contrasena) {
      navigate('/dashboard'); // Cambia según la ruta deseada
    } else {
      alert('Por favor completa todos los campos');
    }
  };

return (
  <div className="login-container">
    <div className="login-wrapper">
      <div className="login-left">
        <img src={rocket} alt="Rocket" />
      </div>

      <div className="login-right">
        <h1 className="login-title">
          IMPUL<span>CES</span>
        </h1>
        <p className="login-text">
          ¿Ya estás impulsando tu negocio con nosotros? <a href="#">Crea una cuenta</a>
        </p>

        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
          <div className="login-forgot">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>
          <button type="submit">Iniciar</button>
        </form>
      </div>
    </div>
  </div>
);
}
