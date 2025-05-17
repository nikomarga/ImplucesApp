import ContactForm from "../components/ContactForm"
import Navbar from "../components/Navbar"

export default function Contactanos() {
return (
    <>
    <Navbar/>
    <div className="container-fluid">
        <div className="row">
        {/* Columna 20% */}
        <div className="col-12 col-md-2 col-lg-2 p-3 bg-light">
            
        </div>
        {/* Columna 80% */}
        <div className="col-12 col-md-10 col-lg-10 p-3 bg-light">
            <ContactForm/>
        </div>
        </div>
    </div>
    </>
  )
}
