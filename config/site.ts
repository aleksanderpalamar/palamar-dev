import { alt } from "@/app/(marketing)/about/opengraph-image";
import { url } from "inspector";

type SiteConfigProps = {
  title: string,
  description: string,
  icons: [
    { 
      url: string,
      sizes: string,
      type: string,
     },
     {
      url: string,
      sizes: string,
      type:   string,
     },
     {
      url: string,
      sizes: string,
      type:  string,
     }
  ],
  keywords: [
    'AleksanderPalamar',
    'Desenvolvedor',
    'Desenvolvedor Web',
    'Programador',
    'Programador Web',
    'Frontend',
    'Frontend Developer',
    'Backend',
    'Backend Developer',
    'Fullstack',
  ],
  alternates: {
    canonical: string,
    languages: {
      'pt-BR': string,
      'en-US': string,
    },
  },
  openGraph?: {
    title: string,
    description: string,
    images: string,
  },
  authors: [
    { 
      name: string, 
      url: string,
    }
],
creator: string, 
};

export const siteConfig: SiteConfigProps = {
  title: 'Palamar.Dev',
  description: 'Site pessoal de Aleksander Palamar',
  icons: [
    {
      url: '/images/favicon.png',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      url: '/images/favicon.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      url: '/images/favicon.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
  keywords: [
    'AleksanderPalamar',
    'Desenvolvedor',
    'Desenvolvedor Web',
    'Programador',
    'Programador Web',
    'Frontend',
    'Frontend Developer',
    'Backend',
    'Backend Developer',
    'Fullstack',
  ],
  alternates: {
    canonical: 'https://aleksanderpalamar.dev',
    languages: {
      'pt-BR': 'https://aleksanderpalamar.dev',
      'en-US': 'https://aleksanderpalamar.dev/',
    },
  },
  
  authors: [
    {
      name: 'Aleksander Palamar',
      url: 'https://aleksanderpalamar.dev',
    },
  ],
  creator: 'Aleksander Palamar',
};