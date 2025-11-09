/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Pas besoin de basePath avec domaine personnalisé
  // basePath: '',
  // assetPrefix: '',
};

export default nextConfig;

