/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = {
//     async rewrites() {
//       return [
//         {
//           source: '/',
//           destination: 'http://127.0.0.1:5000/*',
//         },
//       ];
//     },
//   };
module.exports = nextConfig
module.exports = {
  async redirects() {
      return [
          {
              source: '/',
              destination: '/homepage',
              permanent: false, // Consider using false during development
          },
      ];
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};