import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import rocket from '../assets/images/rocket2.png';
import './login.css'; 

const BASE_URL = 'https://impulces-backend-724298271244.us-central1.run.app'; 

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
      const response = await axios.post(`${BASE_URL}/usuarios/login`, { 
        correo,
        password: contrasena,
      });

      localStorage.setItem('usuario', JSON.stringify(response.data));
      localStorage.setItem('usuarioId', response.data.id);

      setLoading(false);
      navigate('/MainPage');
    } catch (error) {
      console.error('Error en el login:', error);
      setLoading(false);
      alert('Correo o contraseña incorrectos');
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
            ¿Quieres impulsar tu negocio con nosotros?
            <Link to="/CrearCuenta">Crea una cuenta</Link> 
          </p>

          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Ingresando...' : 'Iniciar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
