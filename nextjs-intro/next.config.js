/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      }
    ] 
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
      },
      // CORS 해결
      {
        source: "/auth/login",
        destination : "https://cac6-14-35-253-174.jp.ngrok.io/auth/login"
      },
      // CORS 해결
      {
        source: "/auth/signup",
        destination : "https://cac6-14-35-253-174.jp.ngrok.io/auth/signup"
      },
    ]

  }
}

module.exports = nextConfig
