/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/google4f094853163ee0a3',
        destination: '/google4f094853163ee0a3.html',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
