'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { personalInfo } from '@/lib/data';

const navigation = [
  { href: '/', label: 'Inicio' },
  { href: '/projects', label: 'Proyectos' },
  { href: '/about', label: 'Sobre mí' },
  { href: '/contact', label: 'Contacto' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-4 z-50 mx-auto mt-4 w-[calc(100%-2rem)] max-w-4xl border border-white/50 bg-white/70 backdrop-blur-xl transition-[border-radius,box-shadow,background-color] duration-300 dark:border-white/10 dark:bg-slate-900/70 ${
        isMenuOpen ? 'rounded-4xl' : 'rounded-full'
      } ${
        isScrolled
          ? 'shadow-2xl shadow-slate-900/15'
          : 'shadow-lg shadow-slate-900/10'
      }`}
    >
      <nav aria-label="Navegación principal" className="px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="shrink-0 text-lg font-bold tracking-tight text-gray-950 transition-colors hover:text-blue-700 dark:text-white dark:hover:text-blue-300 sm:text-xl"
          >
            {personalInfo.name}
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-white/80 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            className="grid size-10 place-items-center rounded-full bg-gray-950 text-white shadow-md transition hover:scale-105 hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 md:hidden"
          >
            {isMenuOpen ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="size-5"
              >
                <path d="M6 6 18 18M18 6 6 18" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="size-5"
              >
                <path d="M5 8h14M5 16h14" />
              </svg>
            )}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`grid transition-[grid-template-rows,opacity] duration-300 md:hidden ${
            isMenuOpen
              ? 'grid-rows-[1fr] opacity-100'
              : 'pointer-events-none grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <ul className="grid gap-1 border-t border-gray-900/10 pt-3 dark:border-white/10">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-white/80 hover:text-blue-700 dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
