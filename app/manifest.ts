import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aleksander Palamar',
    short_name: 'Palamar',
    description: 'Aleksander Palamar - FullStack Developer',
    lang: 'en',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      },
    ]
  }
}