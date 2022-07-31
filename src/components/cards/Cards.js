import { Link } from 'react-router-dom';

export default function Cards ( { image, idMovie } ) {
    return (
        <Link to={`/sessoes/${idMovie}`}>
            <div className="movie-card">
                <img className="movie-card-img" src={image} alt="" />
            </div>
        </Link>
    )
}