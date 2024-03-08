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
          {
            protocol: 'https',
            hostname: 'images.hdqwalls.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'img.freepik.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'i.ibb.co',
            port: '',
          },
        ],
      },
};

export default nextConfig;


