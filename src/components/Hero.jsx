import { useNavigate } from 'react-router-dom';
export default function Hero() {
  const navigate = useNavigate()
  return (
    <>
      <nav className="navbar  w-100">
        <div className="container-fluid">
          <form className="d-flex w-100" role="search">
            <input
              className="form-control me-2 "
              style={{ border: '1px solid #808080', borderRadius: '10px', padding: '5px 15px' }}
              type="search"
              placeholder="Escribe aqui el nombre del servicio o producto"
              aria-label="Search"
            />
            <button type="button" className="btn">
              <i className="bi bi-search" style={{ fontSize: '20px' }}></i>
            </button>
          </form>
        </div>
      </nav>

      <div className="navbar w-100">
        <div className="container-fluid d-flex w-100 p-0 m-0">
          <button 
            onClick={() => navigate('/AgregarServicio')}
            type="button"
            className="btn btn-primary w-100 rounded-0 text-start"
            style={{fontSize: '17px', border: 'none', backgroundColor: '#c60078', color: '#ffffff', borderRadius: '20px',  margin: '0px 27px 0px 13px' }}>
            <i className="bi bi-plus me-2" style={{ fontSize: '20px' }}></i>
            Agrega tu servicio / producto aquí
          </button>
        </div>
      </div>
    </>
    
  )
}
