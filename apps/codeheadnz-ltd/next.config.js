//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

const BASE_PATH = process.env.BASE_PATH || '';

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  basePath: BASE_PATH,
  env: {
    NX_CLOUD_AUTH_TOKEN: `${process.env.NX_CLOUD_AUTH_TOKEN}`,
    BASE_PATH,
  },
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },

  compiler: {
    // For other options, see https://styled-components.com/docs/tooling#babel-plugin
    styledComponents: {
      ssr: false,
    },
  },
  images: {
    domains: ['images.pexels.com'],
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
