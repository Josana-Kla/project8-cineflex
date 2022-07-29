export default function Subtitles( { color, name } ) {
    return (
        <span>
            <div className={color}></div>
            <p>{name}</p>
        </span>
    )
}