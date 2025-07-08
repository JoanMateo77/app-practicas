// app/page.tsx
import Link from "next/link";   // ⬅️  1. Importa Link

export default function HomePage() {
  return (
    <main
      className="
        flex min-h-screen flex-col items-center justify-center
        bg-gradient-to-b from-white to-indigo-50 px-4
      "
    >
      {/* Hero container */}
      <section className="text-center max-w-2xl space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          ¡Bienvenido a Tu Tienda&nbsp;Online!
        </h1>

        <p className="text-lg text-gray-600">
          Explora nuestro catálogo de productos, descubre ofertas exclusivas
          y disfruta de una experiencia de compra sencilla y rápida.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="
            inline-block rounded-lg bg-indigo-600 px-6 py-3
            font-semibold text-white transition-colors
            hover:bg-indigo-700 focus:outline-none
            focus:ring-2 focus:ring-indigo-400
          "
        >
          Ver productos
        </Link>
      </section>

      {/* Footer pequeño */}
      <footer className="mt-12 text-sm text-gray-400">
        © {new Date().getFullYear()} TuTienda. Todos los derechos reservados.
      </footer>
    </main>
  );
}
