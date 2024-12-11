import { Route, Routes } from "react-router-dom"
import { MovieList, PageNotFound, MovieDetails } from "../pages/Index"

export const AllRouts = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<MovieList title="Moviesda" apiPath='movie/now_playing'/>} />
            <Route path="/movies">
              <Route path="popular" element={<MovieList title="Populat Movies" apiPath='movie/popular'/> } />
              <Route path="top" element={<MovieList title="Top Rating Movies" apiPath='movie/rop_rated'/>} />
              <Route path="upcoming" element={<MovieList title="UpComing Movies" apiPath='movie/upcoming'/>} />
              <Route path=":id" element={<MovieDetails />} />
            </Route>
            <Route path="*" element={<PageNotFound title="Page Not Fount"/>} />
        </Routes>
    </>
  )
}
