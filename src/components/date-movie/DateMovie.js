export default function DateMovie( { day, date, hour } ) {
    
   /*  for(let i = 0; i < hour; i++) {
        console.log(i);
    } */
    
    console.log(hour)
    return (
        <>
            <h3>{day} - {date}</h3>
            <div className="hours">
                <HourButton>{hour.name}</HourButton>
                <button>19:00</button>
            </div>
        </>
    )
}

function HourButton(props) {
    return (
        <button>{props.children}</button>
    )
}