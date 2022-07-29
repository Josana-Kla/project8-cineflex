import Footer from "../components/footer/Footer";

export default function DateAndHour() {
    const dateWeeks = [
        { day: "Sexta-feira", date: "25/06/2021"},
        { day: "Quinta-feira", date: "26/06/2021" }
    ];

    return (
        <>
            <main>
                <h2 className="flex-center">Selecione o horário</h2>
                {dateWeeks.map((dateWeek, index) => (
                    <Date day={dateWeek.day} date={dateWeek.date} key={index} />
                ))}
            </main>

            <Footer />
        </>
    )
}

function Date( { day, date} ) {
    return (
        <div className="date">
            <h3>{day} - {date}</h3>
            <div className="hours">
                <button>15:00</button>
                <button>19:00</button>
            </div>
        </div>
    )
}