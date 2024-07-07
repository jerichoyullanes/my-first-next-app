/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ["images.unsplash.com"], // domains is deprecated
        // so used remotePatterns instead:
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              port: '',
            },
          ],
    },
};

export default nextConfig;
