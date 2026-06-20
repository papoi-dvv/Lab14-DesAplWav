import type { Metadata } from 'next';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Ponte en contacto conmigo para colaborar, desarrollar una idea o conversar sobre nuevos proyectos digitales.',
};

const inputStyles =
  'mt-2 w-full rounded-2xl border border-white/70 bg-white/70 px-4 py-3 text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 max-w-2xl">
          <span className="mb-4 inline-flex rounded-full border border-blue-200/70 bg-blue-50/80 px-4 py-1.5 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur-sm">
            Trabajemos juntos
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            Convirtamos tu idea en una experiencia memorable.
          </h1>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            Cuéntame sobre tu proyecto, desafío o propuesta. Responderé a tu
            mensaje lo antes posible.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="h-fit rounded-3xl border border-white/70 bg-white/65 p-7 shadow-xl shadow-blue-950/5 backdrop-blur-md">
            <h2 className="text-xl font-bold text-gray-950">Contacto directo</h2>
            <p className="mt-3 leading-7 text-gray-600">
              También puedes escribirme directamente por correo o revisar mi
              trabajo en GitHub.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <p className="text-sm font-medium text-gray-500">Correo</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="mt-1 block break-all font-semibold text-blue-700 transition hover:text-blue-900"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">GitHub</p>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block font-semibold text-blue-700 transition hover:text-blue-900"
                >
                  Ver perfil profesional
                </a>
              </div>
            </div>
          </aside>

          <form
            action={`mailto:${personalInfo.email}`}
            method="post"
            encType="text/plain"
            className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-2xl shadow-blue-950/10 backdrop-blur-md sm:p-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="text-sm font-semibold text-gray-800">
                Nombre
                <input
                  type="text"
                  name="nombre"
                  autoComplete="name"
                  required
                  placeholder="Tu nombre"
                  className={inputStyles}
                />
              </label>

              <label className="text-sm font-semibold text-gray-800">
                Correo electrónico
                <input
                  type="email"
                  name="correo"
                  autoComplete="email"
                  required
                  placeholder="tu@correo.com"
                  className={inputStyles}
                />
              </label>
            </div>

            <label className="mt-6 block text-sm font-semibold text-gray-800">
              Asunto
              <input
                type="text"
                name="asunto"
                required
                placeholder="¿En qué puedo ayudarte?"
                className={inputStyles}
              />
            </label>

            <label className="mt-6 block text-sm font-semibold text-gray-800">
              Mensaje
              <textarea
                name="mensaje"
                rows={6}
                required
                placeholder="Cuéntame un poco sobre tu proyecto..."
                className={`${inputStyles} resize-y`}
              />
            </label>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center rounded-2xl bg-gray-950 px-6 py-3.5 font-semibold text-white shadow-lg shadow-gray-950/20 transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:w-auto"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
