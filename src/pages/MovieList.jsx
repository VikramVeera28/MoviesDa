import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { Card } from "../Components";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({title, apiPath}) => {
  const {data : movies} = useFetch(apiPath)
  useEffect(() => {
    document.title = title;
  })
  const navigator = useNavigate();
  return (
    <main className="container">
      <h4 className="lead text-danger border-bottom border-danger">{title}</h4>
      {title == "Moviesda" ? (
        <div className="border bg-secondary-subtle rounded mt-3 p-4">
          <h4 className="mb-2 text-primary">Welcome to MoviesDa</h4>
          <p className="fw-lighter">Discover movies you&apos;ll love with personalized suggestins, curated collections, and quick searches - your guide to funding great files</p>
          <button className="btn btn-primary" onClick={() => (navigator('/movies/upcoming'))}>Explore here</button>
        </div>
      ) : null}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
        {movies.map((movie, index) => {
          return <Card key={movie.id} movie={movie} />
        })}
      </div>
    </main>
  )
}
