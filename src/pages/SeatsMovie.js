import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Subtitles from "../components/choose-seats/subtitles/Subtitles";
import Footer from "../components/footer/Footer";

export default function SeatsMovie() {
    const subtitles = [
        { color: "green-circle", name: "Selecionado"},
        { color: "gray-circle", name: "Disponível"},
        { color: "yellow-circle", name: "Indisponível"}
    ];

     /* for(let i = 1; i <= 50; i++) {
        seats.push(i);
    }; */

    const [ hourSelected, setHourSelected ] = useState([]);
    const [ seats, setSeats ] = useState([]);
    const [ colors, setColors ] = useState("");
    const { idSessao } = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

        promise.then((response) => {
            setHourSelected(response.data);
            setSeats(response.data.seats);
        });
        promise.catch(() => console.log("error"));

    }, []);

    
    return (
        <>
            <main>
                <h2 className="flex-center">Selecione o(s) assento(s)</h2>
                <div className="seats-content flex-center">
                    <div className="seats-list flex-center">
                        {seats.map((seat, index ) => (
                            <UserSeat number={seat.name} seatAvailable={seat.isAvailable} setColor={setColors} color={colors} key={index} id={seat.id} />
                        ))}
                    </div>

                    <div className="subtitles flex-center">
                        {subtitles.map((subtitle, index) => (
                            <Subtitles color={subtitle.color} name={subtitle.name} key={index} />
                        ))}
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

            {/* <Footer image={hourSelected.movie.posterURL} title={hourSelected.movie.title} >
                <h3>{hourSelected.day.weekday} - {hourSelected.name}</h3>
            </Footer> */}
        </>
    )
}

function UserSeat( { number, seatAvailable, setColor, color } ) {
    if(seatAvailable === false) {
       setColor("yellow-circle");
       color = "yellow-circle";
    } else if (seatAvailable === true) {
        setColor("grey-circle");
        color = "grey-circle";
    }

    return (
        <div className={`flex-center ${color}`}>
            <p>{number}</p>
        </div>
    )
}