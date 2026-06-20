import Link from 'next/link';
import { personalInfo } from '@/lib/data';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/70 shadow-sm backdrop-blur-xl">
      <nav className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900 font-display">
            {personalInfo.name}
          </Link>
          <ul className="flex gap-3 text-sm sm:gap-6 sm:text-base">
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-gray-700 hover:text-blue-600 transition">
                Proyectos
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
                Sobre Mí
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
