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
    // This is not working anymore
    // redirects: async () => {
    //   return [
    //     {
    //       source: "/Signup",
    //       destination: "/",
    //       permanent: false,
    //     },
    //   ];
    // },
    // so used this instead:
    async redirects() {
      return [
        {
          source: '/Signup',
          destination: '/',
          permanent: false,
        },
      ]
    },
};

export default nextConfig;
