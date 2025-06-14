import Navbar from '../../frontend/components/Navbar';
import Footer from "../../frontend/components/Footer"

export default function Content() {
  const descargarCSV = () => {
  window.open("https://impulces-backend-724298271244.us-central1.run.app/emprendimientos/export/csv", "_blank");
  window.open("https://impulces-backend-724298271244.us-central1.run.app/usuarios/export/csv", "_blank");
};
  return (
    <>
          {/*<!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
        <Navbar/>
            {/* <!-- Main Content --> */}
            <div id="content">
                
                    <div className="d-sm-flex align-items-center justify-content-end mb-4"> 
                        <a href="C:\Users\nikol\Desktop\Impulces_V3\ImpulcesApp\src\frontend\pages\NotFoundPage.jsx" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report
                        </a>
                        <button onClick={descargarCSV}className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                        <i className="fas fa-download fa-sm text-white-50"></i> Generate CSV
                      </button>
                    </div>           
            
            </div> 
        </div>
    </> 
  )
}
