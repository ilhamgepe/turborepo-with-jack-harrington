/** @type {import('next').NextConfig} */
const withTm = require("next-transpile-modules")(["ui", "store"]);
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

module.exports = withTm({
  reactStrictMode: true
})
