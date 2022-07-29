import DateMovie from "../components/date-movie/DateMovie";
import Footer from "../components/footer/Footer";

export default function DateAndHour() {
    const dateWeeks = [
        { day: "Sexta-feira", date: "25/06/2021" },
        { day: "Quinta-feira", date: "26/06/2021" }
    ];

    return (
        <>
            <main>
                <h2 className="flex-center">Selecione o horário</h2>
                <div className="date">
                    {dateWeeks.map((dateWeek, index) => (
                        <DateMovie day={dateWeek.day} date={dateWeek.date} key={index} />
                    ))}
                </div>
            </main>

            <Footer />
        </>
    )
}

