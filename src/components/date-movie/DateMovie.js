export default function DateMovie( { day, date } ) {
    return (
        <>
            <h3>{day} - {date}</h3>
            <div className="hours">
                <button>15:00</button>
                <button>19:00</button>
            </div>
        </>
    )
}