import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Footer from "../components/footer/Footer";

export default function DateAndHour(props) {
    
    const [ sessions, setSessions ] = useState([]);
    const [ chosenMovie, setChosenMovie ] = useState([]);
    const { idFilme } = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`);

        promise.then((response) => {
            setSessions(response.data.days);
            setChosenMovie(response.data);
        });
        promise.catch(() => console.log("error"));

    }, []);

    console.log(props)

    return (
        <>
            <main>
                <h2 className="flex-center">Selecione o horário</h2>
                {sessions.map((session, index) => (
                    <div className="date" key={index}>
                        <h3>{session.weekday} - {session.date}</h3>
                        <div className="hours">
                            {session.showtimes.map((value, index) => (
                                <button key={index}>{value.name}</button>
                            ))}
                        </div>
                    </div>
                ))}
            </main>

            <Footer image={chosenMovie.posterURL} title={chosenMovie.title} >
                {/* <h3>{Quinta-feira} - {15:00}</h3> */}
            </Footer>
        </>
    )
}



