/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
    async headers() {
      return [
        {
          source: '/dashboard/:slug*',
          headers: [
            {
              key: 'Way-Brand-Id',
              value: '10e93e39-b203-428a-acb1-4b1256222d4d',
            },
            {
              key: 'Way-Secret-Key',
              value: 'MXycRVs-kA_XfX2dnwGgiLCFnAUxxra-CybWeuJtj2',
            },
          ],
        },
      ]
    },
  }