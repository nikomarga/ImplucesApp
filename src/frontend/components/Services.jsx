
  const servicios = [
  {
    titulo: "Manicure & Pedicure",
    autor: "Susan Williams",
    rating: 5,
    descripcion:"Servicio de manicure con las últimas tendencias y materiales de alta duración. Realizo servicio a domicilio en todo el valle de Aburrá. Días se semana descuento especiales 😉",
    imagenPerfil: "https://media.istockphoto.com/id/1389348844/es/foto/foto-de-estudio-de-una-hermosa-joven-sonriendo-mientras-est%C3%A1-de-pie-sobre-un-fondo-gris.jpg?s=612x612&w=0&k=20&c=kUufmNoTnDcRbyeHhU1wRiip-fNjTWP9owjHf75frFQ=",
    imagenes: ["https://images.pexels.com/photos/9393756/pexels-photo-9393756.jpeg?auto=compress&cs=tinysrgb&w=300", "https://images.pexels.com/photos/15491630/pexels-photo-15491630/free-photo-of-manos-mujer-delicado-forma-de-corazon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/17010953/pexels-photo-17010953/free-photo-of-rojo-mujer-mano-salon-de-belleza.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/1164339/pexels-photo-1164339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/887352/pexels-photo-887352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
  },
  {
    titulo: "Cortes de Cabello",
    autor: "Juan Orozco",
    rating: 5,
    descripcion:
      "Mejores estilos solo para caballeros. Ubicados en la avenida la oriental, en el centro de Medellín. Encuentra la motilada que necesitas en un solo lugar por un excelente precio.💇‍♂️",
    imagenPerfil: "/img/hombre1.jpg",
    imagenes: ["/img/c1.jpg", "/img/c2.jpg", "/img/c3.jpg", "/img/c4.jpg", "/img/c5.jpg"],
  },
  {
    titulo: "Clases de Inglés",
    autor: "Jose Suarez",
    rating: 4,
    descripcion:
      "Ofrecemos clases de inglés adaptadas a tu nivel y necesidades. Mejora tus habilidades para el trabajo, estudios o simplemente aprende un nuevo idioma.",
    imagenPerfil: "/img/hombre2.jpg",
    imagenes: ["/img/i1.jpg", "/img/i2.jpg", "/img/i3.jpg", "/img/i4.jpg", "/img/i5.jpg"],
  },
  {
    titulo: "Postres Artesanales",
    autor: "Juliana Garcia",
    rating: 3,
    descripcion:
      "Variedad de tortas, cupcakes y postres fríos elaborados con ingredientes frescos. Ideales para eventos como cumpleaños, bodas o reuniones.",
    imagenPerfil: "/img/mujer2.jpg",
    imagenes: ["/img/p1.jpg", "/img/p2.jpg", "/img/p3.jpg", "/img/p4.jpg", "/img/p5.jpg"],
  },
];

export default function Services() {
  return (
    <section className="py-12 px-4 bg-gray-100">
      {servicios.map((servicio, idx) => (
        <div
          key={idx}
          className="bg-white shadow-md rounded-lg mb-8 overflow-hidden"
        >
          {/* Contenedor principal: avatar + info */}
          <div className="flex flex-col md:flex-row" >
            {/* Avatar - 30% */}
            <div className="w-full md:w-[30%] p-4 flex justify-center items-center" style={{backgroundColor: '#FFFFFF'}}>
              <img
                src={servicio.imagenPerfil}
                alt="avatar"
                className="rounded-full object-cover"
                style={{  width: '128px', height: '128px' }}
              />
            </div>

            {/* Info - 70% */}
            <div className="md:w-[70%] p-4" >
              <h3 className="text-xl font-semibold text-gray-800">
                {servicio.titulo}
              </h3>
              <p className="text-sm text-gray-500">by {servicio.autor}</p>
              <p className="mt-2 text-gray-700">{servicio.descripcion}</p>
              <div className="flex justify-between items-center mt-4">
                <div className="text-yellow-400 text-lg">
                  {"★".repeat(servicio.rating) + "☆".repeat(5 - servicio.rating)}
                </div>
                <button className="bg-blue-600 text-sm px-4 py-1 rounded shadow hover:bg-blue-700">
                  Contactar
                </button>
              </div>
            </div>
          </div>

          {/* Galería de imágenes - 100% ancho */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 px-4 pb-4" style={{backgroundColor: '#F5F5F5', }}>
            {servicio.imagenes.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="foto"
                className="h-24 w-full object-cover rounded"
                style={{  width: '128px', height: '128px' }}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

