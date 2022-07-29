import { Link, useParams } from 'react-router-dom';

export default function Cards ( { image, key } ) {
    const { idFilme } = useParams();

    return (
        <Link to="/sessoes/:{key}">
            <div className="movie-card">
                <img className="movie-card-img" src={image} alt="" />
            </div>
        </Link>
    )
}