/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY
const SERVER = process.env.SERVER

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
        destination : `${SERVER}/auth/login`
      },
      // CORS 해결
      {
        source: "/auth/signup",
        destination : `${SERVER}/auth/signup`
      },
    ]

  }
}

module.exports = nextConfig
