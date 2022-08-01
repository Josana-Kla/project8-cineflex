export default function Footer( props  ) {
    return (
        <footer>
            <div className="movie-chosen movie-card">
                <img className="movie-card-img" src={props.image} alt="" />
            </div>
            <div>
                <h3>{props.title}</h3>
                {props.children}
            </div>
        </footer>
    )
}