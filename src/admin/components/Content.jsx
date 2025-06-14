import Navbar from '../../frontend/components/Navbar';
import Footer from "../../frontend/components/Footer"

export default function Content() {
  const descargarCSVU = () => {
  window.open("https://impulces-backend-724298271244.us-central1.run.app/usuarios/export/csv", "_blank");
};

  const descargarCSVI = () =>{
  window.open("https://impulces-backend-724298271244.us-central1.run.app/emprendimientos/export/csv", "_blank");
  }
  
  return (
    <>
          {/*<!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
        <Navbar/>
            {/* <!-- Main Content --> */}
            <div id="content">
                
                    <div className="d-sm-flex align-items-center justify-content-center mb-4 gap-3"> 
                        <button onClick={descargarCSVI}className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"> 
                        <i className="fas fa-download fa-sm text-white-50"></i> Generate CSV Emprendimientos
                      </button>
                        <button onClick={descargarCSVU}className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                        <i className="fas fa-download fa-sm text-white-50"></i> Generate CSV Usuarios
                      </button>
                    </div>           
            
            </div> 
        </div>
    </> 
  )
}
