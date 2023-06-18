/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
      serverComponentsExternalPackages: ["mongoose"],
    },
    productionBrowserSourceMaps: true,
    images: {
      remotePatterns: [
          { hostname: 'res.cloudinary.com', protocol: 'https', port: '' }
      ]
  },
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
      return config
    }
  }
  
  module.exports = nextConfig
  