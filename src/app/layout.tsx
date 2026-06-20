import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { personalInfo } from '@/lib/data';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(personalInfo.siteUrl),
  title: {
    default: `${personalInfo.name} - ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.description,
  keywords: [
    'desarrollador web',
    'full stack',
    'next.js',
    'react',
    'typescript',
    'portafolio',
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: personalInfo.siteUrl,
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.description,
    siteName: personalInfo.name,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - Portafolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.description,
    images: ['/og-image.jpg'],
    creator: '@tuusuario',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-de-verificacion',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="relative flex min-h-screen flex-col overflow-x-hidden bg-slate-50">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-gradient-to-br from-sky-50 via-white to-violet-50"
        >
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-cyan-300/45 blur-3xl mix-blend-multiply motion-safe:animate-pulse" />
          <div className="absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-violet-300/40 blur-3xl mix-blend-multiply motion-safe:animate-pulse [animation-delay:1.5s]" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-blue-300/35 blur-3xl mix-blend-multiply motion-safe:animate-pulse [animation-delay:3s]" />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />
          <main className="grow bg-white/35 backdrop-blur-sm">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
