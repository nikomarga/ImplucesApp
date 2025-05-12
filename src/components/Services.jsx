

export default function Services() {
  const services = [
    { title: "Automatización", description: "Optimiza tus procesos operativos." },
    { title: "Diseño Web", description: "Crea tu presencia digital profesional." },
    { title: "Marketing", description: "Aumenta tu visibilidad y ventas." },
  ];
  return (
    <section id="servicios" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {services.map((service, index) => (
          <div key={index} className="p-6 border rounded shadow">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
