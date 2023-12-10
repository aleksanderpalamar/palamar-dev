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
      }
    ]
  },
  output: "export",
}

module.exports = nextConfig
