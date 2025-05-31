import Navbar from "../components/Navbar"
import Buscar from "../components/Buscar"
import Hero from "../components/Hero"
import Services from "../components/Services"
export default function MainPage() {
  return (
    <div>
        <Navbar/>
              <div className="container-fluid">
                <div className="row">
                  {/* Columna 20% */}
                  <div className="col-12 col-md-2 col-lg-2 p-3 ">
                    <Buscar />
                  </div>

                  {/* Columna 80% */}
                  <div className="col-12 col-md-10 col-lg-10 p-3 bg-light">
                    <Hero />
                    <Services />
                  </div>
                </div>
              </div>
    </div>
  )
}


