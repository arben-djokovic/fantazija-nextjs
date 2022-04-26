/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.bakingo.com', 'www.espreso.co.rs', 'www.linkpicture.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
