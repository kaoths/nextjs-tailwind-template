const TerserPlugin = require("terser-webpack-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,

  images: {
    domains: [],
  },

  i18n: {
    locales: ["default"],
    defaultLocale: "default",
    localeDetection: false,
  },

  async redirects() {
    return [];
  },

  webpack(config, _context) {
    config.plugins = config.plugins || [];

    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "removeViewBox",
                  active: false,
                },
              ],
            },
          },
        },
      ],
    });

    config.optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              ecma: 2022,
              drop_console: true,
            },
          },
        }),
      ],
    };

    return config;
  },
};

module.exports = nextConfig;
