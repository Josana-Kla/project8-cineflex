export default function Subtitles( { color, name } ) {
    return (
        <span className="flex-center">
            <div className={color}></div>
            <p>{name}</p>
        </span>
    )
}