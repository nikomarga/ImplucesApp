import React, { useEffect, useState } from "react";
import "./Services.css";

export default function Services() {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/emprendimientos")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener emprendimientos");
        return res.json();
      })
      .then((data) => {
        // Mapear emprendimientos y armar URLs de imágenes
        const serviciosFormateados = data.map((item) => {
          // Armar arreglo con URLs para las 5 posibles imágenes
          const imagenes = [];
          for (let i = 1; i <= 5; i++) {
            // Aquí asumo que si la imagen no existe, el backend devuelve 404
            imagenes.push(`http://localhost:8000/emprendimientos/imagen/${item.id}/${i}`);
          }

          return {
            id: item.id,
            titulo: item.nombreServicio,
            autor: item.creadoPor || "Desconocido",
            descripcion: item.descripcionServicio,
            rating: item.rating || 4,
            imagenPerfil: "/default-avatar.png", // o un campo en tu modelo si tienes avatar
            imagenes,
          };
        });
        setServicios(serviciosFormateados);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className="services-container">
      {servicios.map((servicio, idx) => (
        <div key={idx} className="service-card">
          <div className="service-header">
            {/* Avatar */}
            <div className="avatar-container">
              <img src={servicio.imagenPerfil} alt="avatar" className="avatar" />
            </div>

            {/* Info */}
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

          {/* Galería */}
          <div className="gallery">
            {servicio.imagenes.map((imgUrl, i) => (
              <img
                key={i}
                src={imgUrl}
                alt={`foto ${i + 1}`}
                className="gallery-img"
                onError={(e) => {
                  e.target.style.display = "none"; // Ocultar imagen si no existe o no carga
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
