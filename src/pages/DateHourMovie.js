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
            
            <footer>
                <div className="movie-chosen movie-card">
                    <img className="movie-card-img" src="../../assets/img/movie-2067.png" alt="" />
                </div>
                <div>
                    <h3>Enola Holmes</h3>
                    <h3>Quinta-feira - 15:00</h3>
                </div>
            </footer>
        </>
    )
}