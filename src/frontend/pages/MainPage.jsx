import Navbar from "../components/Navbar";
import Buscar from "../components/Buscar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import { useState, useEffect } from "react";
import axios from "axios";

export default function MainPage() {
  const [filtros, setFiltros] = useState({ sedes: [], clasificaciones: [] });
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get("/emprendimientos");
        let data = res.data;

        // Filtros aplicados
        if (filtros.sedes.length > 0) {
          data = data.filter(e => filtros.sedes.includes(e.sede));
        }

        if (filtros.clasificaciones.length > 0) {
          data = data.filter(e =>
            filtros.clasificaciones.includes(e.categoriaServicio.toLowerCase())
          );
        }

        const serviciosFormateados = data.map((item) => {
          const imagenes = [];
          for (let i = 1; i <= 5; i++) {
            imagenes.push(`/emprendimientos/imagen/${item.id}/${i}`);
          }

          return {
            id: item.id,
            titulo: item.nombreServicio,
            autor: item.Creado_por || "Desconocido",
            descripcion: item.descripcionServicio,
            rating: item.rating || 4,
            imagenPerfil: "/default-avatar.png",
            imagenes,
          };
        });

        setServicios(serviciosFormateados);
      } catch (err) {
        console.error("Error al obtener emprendimientos:", err);
      }
    };

    fetchData();
  }, [filtros]); // 👈 se vuelve a ejecutar cada vez que cambian los filtros

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-2 col-lg-2 p-3 ">
            <Buscar setFiltros={setFiltros} />
          </div>

          <div className="col-12 col-md-10 col-lg-10 p-3 bg-light">
            <Hero />
            <Services servicios={servicios} />
          </div>
        </div>
      </div>
    </div>
  );
}


