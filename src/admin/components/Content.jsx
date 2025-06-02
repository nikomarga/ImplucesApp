import Navbar from '../../frontend/components/Navbar';
import Footer from "../../frontend/components/Footer"

export default function Content() {
  return (
    <>
          {/*<!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
        <Navbar/>
            {/* <!-- Main Content --> */}
            <div id="content">
                
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report
                        </a>
                    </div>           
            {/* AQUI VA EL CONTENIDO DEL DASHBOARD va con rutas y codigo JS */}
            
            </div> 
        </div>
    </> 
  )
}
