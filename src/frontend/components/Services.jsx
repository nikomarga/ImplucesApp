import "./Services.css"
  const servicios = [
  {
    titulo: "Manicure & Pedicure",
    autor: "Susan Williams",
    rating: 5,
    descripcion:"Servicio de manicure con las últimas tendencias y materiales de alta duración. Realizo servicio a domicilio en todo el valle de Aburrá. Días se semana descuento especiales 😉",
    imagenPerfil: "https://media.istockphoto.com/id/1389348844/es/foto/foto-de-estudio-de-una-hermosa-joven-sonriendo-mientras-est%C3%A1-de-pie-sobre-un-fondo-gris.jpg?s=612x612&w=0&k=20&c=kUufmNoTnDcRbyeHhU1wRiip-fNjTWP9owjHf75frFQ=",
    imagenes: [
      "https://images.pexels.com/photos/9393756/pexels-photo-9393756.jpeg?auto=compress&cs=tinysrgb&w=300", 
      "https://images.pexels.com/photos/15491630/pexels-photo-15491630/free-photo-of-manos-mujer-delicado-forma-de-corazon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
      "https://images.pexels.com/photos/17010953/pexels-photo-17010953/free-photo-of-rojo-mujer-mano-salon-de-belleza.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
      "https://images.pexels.com/photos/1164339/pexels-photo-1164339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
      "https://images.pexels.com/photos/887352/pexels-photo-887352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
  },
  {
    titulo: "Cortes de Cabello",
    autor: "Juan Orozco",
    rating: 5,
    descripcion:
      "Mejores estilos solo para caballeros. Ubicados en la avenida la oriental, en el centro de Medellín. Encuentra la motilada que necesitas en un solo lugar por un excelente precio.💇‍♂️",
    imagenPerfil: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imagenes: [
      "https://images.pexels.com/photos/9393756/pexels-photo-9393756.jpeg?auto=compress&cs=tinysrgb&w=300", 
      "https://images.pexels.com/photos/15491630/pexels-photo-15491630/free-photo-of-manos-mujer-delicado-forma-de-corazon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
      "https://images.pexels.com/photos/17010953/pexels-photo-17010953/free-photo-of-rojo-mujer-mano-salon-de-belleza.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
      "https://images.pexels.com/photos/1164339/pexels-photo-1164339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
      "https://images.pexels.com/photos/887352/pexels-photo-887352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
  },
  {
    titulo: "Clases de Inglés",
    autor: "Jose Suarez",
    rating: 4,
    descripcion:
      "Ofrecemos clases de inglés adaptadas a tu nivel y necesidades. Mejora tus habilidades para el trabajo, estudios o simplemente aprende un nuevo idioma.",
    imagenPerfil: "/img/hombre2.jpg",
    imagenes: [
      "https://images.pexels.com/photos/9393756/pexels-photo-9393756.jpeg?auto=compress&cs=tinysrgb&w=300", 
      "https://images.pexels.com/photos/15491630/pexels-photo-15491630/free-photo-of-manos-mujer-delicado-forma-de-corazon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
      "https://images.pexels.com/photos/17010953/pexels-photo-17010953/free-photo-of-rojo-mujer-mano-salon-de-belleza.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
      "https://images.pexels.com/photos/1164339/pexels-photo-1164339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
      "https://images.pexels.com/photos/887352/pexels-photo-887352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
  },
  {
    titulo: "Postres Artesanales",
    autor: "Juliana Garcia",
    rating: 3,
    descripcion:
      "Variedad de tortas, cupcakes y postres fríos elaborados con ingredientes frescos. Ideales para eventos como cumpleaños, bodas o reuniones.",
    imagenPerfil: "/img/mujer2.jpg",
    imagenes: [
      "https://images.pexels.com/photos/9393756/pexels-photo-9393756.jpeg?auto=compress&cs=tinysrgb&w=300", 
      "https://images.pexels.com/photos/15491630/pexels-photo-15491630/free-photo-of-manos-mujer-delicado-forma-de-corazon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
      "https://images.pexels.com/photos/17010953/pexels-photo-17010953/free-photo-of-rojo-mujer-mano-salon-de-belleza.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
      "https://images.pexels.com/photos/1164339/pexels-photo-1164339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
      "https://images.pexels.com/photos/887352/pexels-photo-887352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
  },
];

export default function Services() {
  return (
 <section className="services-container">
      {servicios.map((servicio, idx) => (
        <div key={idx} className="service-card">
          <div className="service-header">
            {/* Avatar */}
            <div className="avatar-container">
              <img
                src={servicio.imagenPerfil}
                alt="avatar"
                className="avatar"
              />
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
            {servicio.imagenes.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="foto"
                className="gallery-img"
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
