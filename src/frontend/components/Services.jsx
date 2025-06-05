import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Services.css";

export default function Services() {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [emprRes, userRes] = await Promise.all([
          axios.get("/emprendimientos"),
          axios.get("/usuarios"),
        ]);

        const emprendimientos = emprRes.data;
        const usuarios = userRes.data;

        // Crear un mapa: idEmprendimiento → nombre del usuario
        const autorMap = {};
        usuarios.forEach((user) => {
          user.emprendimientos.forEach((emp) => {
            autorMap[emp.id] = user.usuario;
          });
        });

        // Formatear los servicios
        const serviciosFormateados = emprendimientos.map((item) => {
          const imagenes = [];
          for (let i = 1; i <= 5; i++) {
            imagenes.push(`/emprendimientos/imagen/${item.id}/${i}`);
          }

          return {
            id: item.id,
            titulo: item.nombreServicio,
            autor: autorMap[item.id] || "Desconocido", // Busca en el mapa
            descripcion: item.descripcionServicio,
            rating: item.rating || 4,
            imagenPerfil: "/default-avatar.png",
            imagenes,
          };
        });

        setServicios(serviciosFormateados);
      } catch (error) {
        console.error("Error al obtener los servicios o usuarios:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="services-container">
      {servicios.map((servicio, idx) => (
        <div key={idx} className="service-card">
          <div className="service-header">
            <div className="avatar-container">
              <img src={servicio.imagenPerfil} alt="avatar" className="avatar" />
            </div>
            <div className="info-container">
              <div className="Container-Name-Services">
                <h3 className="title">{servicio.titulo}</h3>
                <p className="author">by {servicio.autor}</p>
                <div className="rating">
                  {"★".repeat(servicio.rating) + "☆".repeat(5 - servicio.rating)}
                </div>
              </div>
              <div className="Container-Name-boton">
                <p className="description">{servicio.descripcion}</p>
                <div className="rating-contact">
                  <button className="btn-contact">Contactar</button>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery">
            {servicio.imagenes.map((imgUrl, i) => (
              <img
                key={i}
                src={imgUrl}
                alt={`foto ${i + 1}`}
                className="gallery-img"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

