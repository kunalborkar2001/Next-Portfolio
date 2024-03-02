/** @type {import('next').NextConfig} */
const nextConfig = {
    darkMode: 'dark',
    // images : {
    //     domains : ["","aceternity.com"]
    // },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.aceternity.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'aceternity.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'media.istockphoto.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;


