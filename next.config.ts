import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/bio-energy#cta',
        permanent: false,
      },
      {
        source: '/services',
        destination: '/bio-energy',
        permanent: false,
      },
      {
        source: '/solutions',
        destination: '/bio-energy',
        permanent: false,
      },
      {
        source: '/industries',
        destination: '/bio-fertilizers',
        permanent: false,
      },
      {
        source: '/sustainability',
        destination: '/research-development',
        permanent: false,
      },
      {
        source: '/blog',
        destination: '/projects',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
