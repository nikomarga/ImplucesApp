export default function ContactForm() {
  return (
    <section id="contacto" className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Contáctanos</h2>

      <form className="bg-white max-w-xl mx-auto p-8 rounded-lg shadow-lg flex flex-col gap-6">
        <input
          type="text"
          placeholder="Nombre"
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <textarea
          placeholder="Tu mensaje"
          className="border border-gray-300 p-3 h-32 rounded resize-none focus:outline-none focus:ring-2 focus:ring-green-600"
        ></textarea>
        <button
          type="submit"
          className="bg-green-700 text-white py-3 rounded hover:bg-green-800 transition-colors"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}


