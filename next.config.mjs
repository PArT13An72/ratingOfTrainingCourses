/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
            plugins: [{
              name: 'preset-default',
              params: {
                override: {
                  removeViewBox: false
                }
              }
            }],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });

    return config;
  },
};

export default nextConfig;
