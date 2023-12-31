/** @type {import('next').NextConfig} */
const nextConfig = {
  // Esto permite crear una Static Page Application (SPA)
  // Para mas info ver https://nextjs.org/docs/app/building-your-application/deploying/static-exports
  output: 'export',
  // Esto es para que el componente Image de nextjs no optimize las imagenes
  images: { unoptimized: true },
}

module.exports = nextConfig
