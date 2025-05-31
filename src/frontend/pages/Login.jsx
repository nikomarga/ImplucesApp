import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import rocket from '../assets/images/rocket2.png';
import degeadado from '../assets/images/degradado.png';
import './login.css';

export default function Login() {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!correo || !contrasena) {
      alert('Por favor completa todos los campos');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/usuarios/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          correo: correo,
          password: contrasena,  // Asegúrate que el backend espera este campo
        }),
      });

      if (!response.ok) {
        throw new Error('Usuario o contraseña incorrectos');
      }

      const data = await response.json();

      // Aquí asumo que el backend devuelve un token y usuario
      localStorage.setItem('token', data.token);      // si tienes token
      localStorage.setItem('usuario', data.usuario);  // usuario o correo

      setLoading(false);
      navigate('/dashboard');  // Redirigir a dashboard tras login exitoso
    } catch (error) {
      setLoading(false);
      alert(error.message);
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
            ¿Quieres impulsando tu negocio con nosotros? <a href="/CrearCuenta">Crea una cuenta</a>
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
            <button type="submit" disabled={loading}>
              {loading ? 'Ingresando...' : 'Iniciar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}