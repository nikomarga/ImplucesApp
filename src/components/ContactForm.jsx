
export default function ContactForm() {
  return (
    <section id="contacto" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
      <form className="max-w-md mx-auto grid gap-4 text-left">
        <input type="text" placeholder="Nombre" className="border p-2 rounded" />
        <input type="email" placeholder="Correo electrónico" className="border p-2 rounded" />
        <textarea placeholder="Tu mensaje" className="border p-2 rounded h-32"></textarea>
        <button className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition">
          Enviar
        </button>
      </form>
    </section>
  )
}
