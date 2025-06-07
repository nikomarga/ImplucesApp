import React from "react";
import "./Services.css";

export default function Services({ servicios }) {
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