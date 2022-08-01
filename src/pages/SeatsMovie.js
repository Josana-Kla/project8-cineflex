import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Subtitles from "../components/choose-seats/subtitles/Subtitles";
import Footer from "../components/footer/Footer";

export default function SeatsMovie() {
    const subtitles = [
        { color: "green-circle", name: "Selecionado"},
        { color: "gray-circle", name: "Disponível"},
        { color: "yellow-circle", name: "Indisponível"}
    ];

    //TODO:MUDAR NOME DA VARIAVEL DE ESTADO HOURSELECTED
    const [ hourSelected, setHourSelected ] = useState([]);
    const [ seats, setSeats ] = useState([]);
    const [ listAllSeatsSelected, setListAllSeatsSelected ] = useState([]);
    const [ colors, setColors ] = useState("");
    const [ cpf, setCpf ] = useState('');
    const [ name, setName ] = useState('');
    const { idSessao } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

        promise.then((response) => {
            setHourSelected(response.data);
            setSeats(response.data.seats);
        });
        promise.catch(() => console.log("error"));

    }, []);

    function sendDatas(event) {
        event.preventDefault();
      
		const promise = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", {
			ids: [1, 3, 4],
            name: name,
            cpf: cpf
		});
        promise.then(
            navigate("/sucesso", {
                /* name: event.target.name.value,
                cpf: event.target.cpf.value,
                movie: hourSelected.movie.title,
                date: hourSelected.name,
                day: hourSelected.day.weekday */
            }
        ))
	}

    return (
        <>
            <main>
                <h2 className="flex-center">Selecione o(s) assento(s)</h2>
                <div className="seats-content flex-center">
                    <div className="seats-list flex-center">
                        {seats.map((seat, index ) => (
                            <UserSeat number={seat.name} seatAvailable={seat.isAvailable} setColor={setColors} color={colors} key={index} id={seat.id} listAllSeatsSelected={listAllSeatsSelected} currentSeat={seat} setListAllSeatsSelected={setListAllSeatsSelected} />
                        ))}
                    </div>

                    <div className="subtitles flex-center">
                        {subtitles.map((subtitle, index) => (
                            <Subtitles color={subtitle.color} name={subtitle.name} key={index} />
                        ))}
                    </div>
                            
                    <form onSubmit={sendDatas}>
                        <div className="user-datas">
                            <div>
                                <label>Nome do comprador:</label>
                                <input type="name" value={name} onChange={e => setName(e.target.value)} placeholder="Digite seu nome..." required />
                            </div>
                            <div>
                                <label>CPF do comprador:</label>
                                <input type="text" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" value={cpf} onChange={e =>  setCpf(e.target.value)} placeholder="Digite seu CPF..." maxLength="14" required />
                            </div>
                        </div>
                        
                        <button type="submit" className="orange-button-finish">Reservar assento(s)</button>
                    </form>

                </div>
            </main>

            <Footer image={hourSelected.movie?.posterURL} title={hourSelected.movie?.title} >
                <h3>{hourSelected.day?.weekday} - {hourSelected.name}</h3>
            </Footer>
        </>
    )
}


function UserSeat( { number, seatAvailable, setColor, color, id, listAllSeatsSelected, currentSeat, setListAllSeatsSelected } ) {
    const [ seatsSelected, setSeatsSelected ] = useState(false);

    if(seatAvailable === true && seatsSelected === false) {
        setColor("grey-circle");
        color = "grey-circle";
    } else if (seatAvailable === true && seatsSelected === true) {
        setColor("green-circle");
        color = "green-circle";
        setListAllSeatsSelected(currentSeat);
    } else {
        setColor("yellow-circle");
        color = "yellow-circle";
    }
    
    //TODO: Pegar e guardar número e id do assento selecionado
    /* let copyListSeats = [...currentSeat, id, number, seatAvailable]; */
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
