import Footer from "../components/footer/Footer";

export default function SeatsMovie() {
    let seats = [];
    for(let i = 1; i <= 50; i++) {
        seats.push(i);
    }
        
    return (
        <>
            <main>
                <h2 className="flex-center">Selecione o(s) assento(s)</h2>
                <div className="seats-content flex-center">
                    <div className="seats-list flex-center">
                        {seats.map((seat, index ) => (
                            <UserSeat  number={seat} key={index} />
                        ))}
                    </div>

                    <div className="subtitles flex-center">
                        <div>
                            <div>bolinha</div>
                            <p>Selecionado</p>
                        </div>
                        <div>
                            <div>bolinha</div>
                            <p>Disponível</p>
                        </div>
                        <div>
                            <div>bolinha</div>
                            <p>Indisponível</p>
                        </div>
                    </div>

                    <div className="user-datas">
                        <div>
                            <h4>Nome do comprador:</h4>
                            <input placeholder="Digite seu nome..." />
                        </div>
                        <div>
                            <h4>CPF do comprador:</h4>
                            <input placeholder="Digite seu CPF..." />
                        </div>
                    </div>

                    <button>Reservar assento(s)</button>
                </div>
            </main>

            <Footer />
        </>
    )
}

function UserSeat( { number } ) {
    return (
        <div className="flex-center">
            <p>{number}</p>
        </div>
    )
}