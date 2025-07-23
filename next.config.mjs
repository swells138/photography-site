/** @type {import('next').NextConfig} */

export const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sdmntprsouthcentralus.oaiusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'sdmntprnorthcentralus.oaiusercontent.com',
      },
    ],
  },
};

export default nextConfig;



