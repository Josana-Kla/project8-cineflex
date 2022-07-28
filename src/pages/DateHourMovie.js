import Footer from "../components/footer/Footer";

export default function DateAndHour() {
    return (
        <>
            <main>
                <h2 className="flex-center">Selecione o horário</h2>
                <div className="date">
                    <h3>Quinta-feira - 24/06/2021</h3>
                    <div className="hours">
                        <button>15:00</button>
                        <button>19:00</button>
                    </div>
                </div>
                <div className="date">
                    <h3>Sexta-feira - 25/06/2021</h3>
                    <div className="hours">
                        <button>15:00</button>
                        <button>19:00</button>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}