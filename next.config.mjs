/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'newsapi.org',
      'www.freep.com',
      'static.foxnews.com',
      'media.cnn.com',
      'www.reuters.com',
      "tvline.com",
      'dims.apnews.com', // Added the new domain here
    ],
  },
};

export default nextConfig;