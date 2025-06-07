import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Buscar from "../components/Buscar";
import Hero from "../components/Hero";
import Services from "../components/Services";

export default function MainPage() {
  const [filtros, setFiltros] = useState({ sedes: [], clasificaciones: [] });
  const [servicios, setServicios] = useState([]);
  const [userMap, setUserMap] = useState({}); // To store user information

  // Fetch user data once when component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/usuarios");
        const users = response.data;
        
        // Create a mapping of emprendimiento IDs to user names
        const mapping = {};
        users.forEach(user => {
          user.emprendimientos?.forEach(emp => {
            mapping[emp.id] = user.usuario;
          });
        });
        setUserMap(mapping);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // Fetch and filter services whenever filters change
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("/emprendimientos");
        let data = response.data;

        // Apply filters
        if (filtros.sedes.length > 0) {
          data = data.filter(e => filtros.sedes.includes(e.sede));
        }

        if (filtros.clasificaciones.length > 0) {
          data = data.filter(e =>
            filtros.clasificaciones.includes(e.categoriaServicio.toLowerCase())
          );
        }

        // Format services with author information
        const formattedServices = data.map(item => ({
          id: item.id,
          titulo: item.nombreServicio,
          autor: userMap[item.id] || "Desconocido", // Get author from userMap
          descripcion: item.descripcionServicio,
          rating: item.rating || 4,
          imagenPerfil: "/default-avatar.png",
          imagenes: Array.from({ length: 5 }, (_, i) => 
            `/emprendimientos/imagen/${item.id}/${i+1}`
          )
        }));

        setServicios(formattedServices);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, [filtros, userMap]); // Re-run when filters or userMap changes

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-2 col-lg-2 p-3">
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