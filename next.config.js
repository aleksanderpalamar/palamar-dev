/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com', 
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com', 
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com', 
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'files.edgestore.dev', 
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'reactjs.org', 
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'nextjs.org', 
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'cdn.iconscout.com', 
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'tailwindcss.com', 
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com', 
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

module.exports = nextConfig
