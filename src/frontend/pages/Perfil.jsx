import Navbar from "../components/Navbar"
import './MiPerfil.css';

export default function Perfil() {
  return (
    <>
      <Navbar/>
      <div className="perfil-container bg-light">
            <img
                  src='https://images.pexels.com/photos/14592814/pexels-photo-14592814.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load'
                  alt="Perfil"
                  className="perfil-avatar"
                />
            <form className="perfil-form bg-light">
              <div className="perfil-header">
                
                <button className="perfil-guardar"> Guardar Cambios</button>
              </div>

              <h2>Información Personal</h2>

              <div className="perfil-inputs">
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Apellido" />
                <input type="email" placeholder="Email"  />
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
};
