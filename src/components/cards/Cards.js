import { Link } from 'react-router-dom';

export default function Cards ( { image, id } ) {
    return (
        <Link to={`/sessoes/${id}`}>
            <div className="movie-card">
                <img className="movie-card-img" src={image} alt="" />
            </div>
        </Link>
    )
}