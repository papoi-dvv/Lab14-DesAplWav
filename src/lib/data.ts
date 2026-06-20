import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'dragon-ball-classcraft',
    title: 'DBZ Gamified Education Platform',
    description: 'Plataforma de gamificación educativa para la gestión de aulas inspirada en ClassCraft con la temática del universo de Dragon Ball.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Tecsupsoft/2025-1-dba-trabajofinal-grupo-01-1',
    featured: true,
  },
  {
    slug: 'bodeapp-control-ventas',
    title: 'BodeApp - Control de Ventas',
    description: 'Aplicación móvil nativa diseñada para la gestión de inventario, control estricto de ventas y optimización de flujos en almacenes y bodegas.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'SQLite'],
    githubUrl: 'https://github.com/fef159/BodeApp-Control-de-Ventas',
    featured: true,
  },
  {
    slug: 'papoi-ecommerce',
    title: 'E-Commerce Platform',
    description: 'Plataforma moderna de comercio electrónico que integra catálogo dinámico de productos, gestión de usuarios y pasarela de compras.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    githubUrl: 'https://github.com/papoi-dvv/ECommerce',
    featured: false,
  },
  {
    slug: 'atlas-app',
    title: 'Atlas App',
    description: 'Aplicación para la visualización de mapas interactivos, geolocalización y dashboard analítico enfocado en la estructuración de datos geográficos.',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop',
    technologies: ['React Native', 'TypeScript', 'Expo', 'OpenStreetMap API'],
    githubUrl: 'https://github.com/fef159/atlas-app',
    featured: false,
  },
];

export const personalInfo = {
  name: 'Paulo Santos',
  title: 'Full Stack Developer',
  description: 'Desarrollador apasionado por crear experiencias web excepcionales',
  email: 'paulo.santos@tecsup.edu.pe',
  github: 'https://github.com/papoi-dvv',
  linkedin: 'https://www.linkedin.com/in/paulo-santosz/',
  siteUrl: 'https://github.com/papoi-dvv',
  avatar: '/foto_perfil.jpeg',
};
