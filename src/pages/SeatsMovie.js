import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Subtitles from "../components/choose-seats/subtitles/Subtitles";
import Footer from "../components/footer/Footer";

export default function SeatsMovie() {
    const subtitles = [
        { color: "green-circle", name: "Selecionado"},
        { color: "gray-circle", name: "Disponível"},
        { color: "yellow-circle", name: "Indisponível"}
    ];


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
                            <UserSeat number={seat.name} seatAvailable={seat.isAvailable} setColor={setColors} color={colors} key={index} id={seat.id} listAllSeats={seats} />
                        ))}
                    </div>

                    <div className="subtitles flex-center">
                        {subtitles.map((subtitle, index) => (
                            <Subtitles color={subtitle.color} name={subtitle.name} key={index} />
                        ))}
                    </div>

                    <form onSubmit>
                        <div className="user-datas">
                            <div>
                                <label>Nome do comprador:</label>
                                <input type="name" placeholder="Digite seu nome..." />
                            </div>
                            <div>
                                <label>CPF do comprador:</label>
                                <input type="text" placeholder="Digite seu CPF..." />
                            </div>
                        </div>
                        
                        <Link to={"/sucesso"}>
                            <button type="submit" className="orange-button-finish">Reservar assento(s)</button>
                        </Link>
                    </form>

                </div>
            </main>

            <Footer image={hourSelected.movie?.posterURL} title={hourSelected.movie?.title} >
                <h3>{hourSelected.day?.weekday} - {hourSelected.name}</h3>
            </Footer>
        </>
    )
}


function UserSeat( { number, seatAvailable, setColor, color, id, listAllSeats } ) {
    const [ seatsSelected, setSeatsSelected ] = useState(false);

    if(seatAvailable === true && seatsSelected === false) {
        setColor("grey-circle");
        color = "grey-circle";
    } else if (seatAvailable === true && seatsSelected === true) {
        setColor("green-circle");
        color = "green-circle";
    } else {
        setColor("yellow-circle");
        color = "yellow-circle";
    }

    let copyListSeats = [...listAllSeats, id, seatAvailable];
    /* console.log(copyListSeats); */
    /* let allAvailables = copyListSeats.filter(function(obj) {return obj.isAvailable === true});
    console.log(allAvailables); */

    function saveSeatsAvailableInState() {
        setSeatsSelected(!seatsSelected);
        if(color === "yellow-circle") {
            alert("Esse assento não está disponível");
        }
    }

    return (
        <div onClick={saveSeatsAvailableInState} className={`flex-center ${color}`}>
            <p>{number}</p>
        </div>
    )
}
