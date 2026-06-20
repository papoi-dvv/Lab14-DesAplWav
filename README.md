# Portafolio Web Profesional

[![Next.js](https://img.shields.io/badge/Next.js-16.2.9-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-149ECA?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

Portafolio personal desarrollado para presentar experiencia, habilidades y proyectos mediante una interfaz rápida, accesible y visualmente cuidada. Combina la arquitectura moderna de Next.js App Router con una estética inspirada en Apple, glassmorphism y navegación responsiva.

## Características principales

- **Proyectos dinámicos:** listado, tarjetas reutilizables y páginas estáticas por slug.
- **Experiencia premium:** fondo Aurora, superficies translúcidas y header flotante tipo Dynamic Island.
- **Diseño responsivo:** navegación colapsable y layouts adaptados desde móviles hasta pantallas amplias.
- **SEO técnico:** metadata por página, Open Graph, Twitter Cards, sitemap y robots generados con Next.js.
- **Rendimiento:** Server Components por defecto, imágenes optimizadas y carga priorizada de recursos LCP.
- **Contacto accesible:** formulario semántico y alternativas directas de contacto.

## Stack tecnológico

| Tecnología | Uso |
| --- | --- |
| [Next.js 16](https://nextjs.org/) | App Router, renderizado, rutas dinámicas, metadata y optimización de imágenes |
| [React 19](https://react.dev/) | Componentes e interactividad aislada |
| [TypeScript 5](https://www.typescriptlang.org/) | Tipado estático y seguridad durante el desarrollo |
| [Tailwind CSS 4](https://tailwindcss.com/) | Diseño responsivo, Aurora y glassmorphism |

## Instalación rápida

### Requisitos

- Node.js 20 o superior
- npm 10 o superior

### Desarrollo local

```bash
git clone https://github.com/papoi-dvv/Lab14-DesAplWav.git
cd Lab14-DesAplWav
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Scripts disponibles

```bash
npm run dev    # Servidor de desarrollo
npm run build  # Build optimizado para producción
npm run start  # Servidor de producción
npm run lint   # Análisis estático con ESLint
```

## Estructura principal

```text
src/
├── app/          # Rutas, layouts, metadata, sitemap y robots
├── components/   # Header, Footer y tarjetas reutilizables
├── lib/          # Datos del portafolio
└── types/        # Interfaces de TypeScript
```

## Personalización

Los datos personales y proyectos se administran desde `src/lib/data.ts`. Los recursos gráficos locales se almacenan en `public/`.

> Antes de desplegar, actualiza `personalInfo.siteUrl` con el dominio definitivo para generar URLs canónicas correctas en metadata, sitemap y robots.

## Despliegue

El proyecto está preparado para desplegarse en [Vercel](https://vercel.com/) o en cualquier plataforma compatible con Node.js y Next.js.
