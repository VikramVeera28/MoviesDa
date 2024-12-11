import { Link } from 'react-router-dom';
import backImage from '../assets/Image/Black-abstract-background.jpg';
import '../App.css';

export const Card = ({movie}) => {
  const { poster_path, id, overview, title, vote_average, vote_count } = movie;
  const Image = poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : backImage;
  return (
    <div className="col">
      <div className="card shadow-sm" title={title}>
        <img src={Image} className='card-img-top' alt="" />
        <div className="card-body">
          <h6 className="text-primary text-overflow-1">{title}</h6>
          <p className='card-text text-overflow-2'>{overview}</p>
          <div className='d-flex justify-content-between align-items-conten'>
            <Link to={`/movies/${id}`} className='btn btn-sm btn-outline-primary stretched-link'>Read More</Link>
            <small><small>⭐ {vote_average} | {vote_count} reviews</small></small>
          </div>
        </div>
      </div>
    </div>
  )
}
