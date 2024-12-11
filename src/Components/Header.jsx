import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-primary" aria-label="Fourth navbar example">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Expand at md</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample04">
              <ul className="navbar-nav mx-auto mb-2 mb-md-0">
                <li className="nav-item"><Link to={'/'} className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to={'/movies/top'} className="nav-link">Top Rating</Link></li>
                <li className="nav-item"><Link to={'/movies/popular'} className="nav-link">Popular</Link></li>
                <li className="nav-item"><Link to={'/movies/upcoming'} className="nav-link">Upcoming</Link></li>
              </ul>
              <form role="search">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
              </form>
            </div>
          </div>
        </nav>
    </header>
  )
}
