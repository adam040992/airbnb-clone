/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add links to allow using items from them
  images: {
    domains: ['links.papareact.com']
  }
}

module.exports = nextConfig
