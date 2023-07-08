/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/weather/',
        permanent: true,
      },
    ]
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
