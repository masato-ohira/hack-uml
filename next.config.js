const withInterceptStdout = require('next-intercept-stdout')

module.exports = withInterceptStdout(
  {
    reactStrictMode: false,
    swcMinify: true,
    trailingSlash: true,
  },
  (text) => (text.includes('Duplicate atom key') ? '' : text),
)
