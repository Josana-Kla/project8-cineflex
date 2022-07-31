export default function Footer( {image, title, children } ) {
    return (
        <footer>
            <div className="movie-chosen movie-card">
                <img className="movie-card-img" src={image} alt="" />
            </div>
            <div>
                <h3>{title}</h3>
                {children}
            </div>
        </footer>
    )
}