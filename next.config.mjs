/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/rihua-tech/nyc-311-service-requests-lakehouse/**",
      },
    ],
  },
}

export default nextConfig
