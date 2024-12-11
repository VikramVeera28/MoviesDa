import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export const MovieDetails = () => {
  const [movie, setMovie] = useState([])
  const params = useParams();
  const key = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;

  useEffect(() => {
      async function fetchMovies() {
          fetch(url)
          .then((res) => res.json())
          .then((jsonData) => setMovie(jsonData))
      }
      fetchMovies();
  })
  useEffect(() => {
    document.title = movie.title
  })
  return (
    <main className="container">

    </main>
  )
}
