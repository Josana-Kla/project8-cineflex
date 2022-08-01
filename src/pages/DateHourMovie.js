import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Footer from "../components/footer/Footer";

export default function DateAndHour() {
    
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


    return (
        <>
            <main>
                <h2 className="flex-center">Selecione o horário</h2>
                <div className="content-date">
                    {sessions.map((session, index) => (
                        <div className="date" key={index} >
                            <h3>{session.weekday} - {session.date}</h3>
                            <div className="hours">
                                {session.showtimes.map((value, index) => (
                                    <Link to={`/assentos/${value.id}`}>
                                        <button key={index}>{value.name}</button>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer image={chosenMovie.posterURL} title={chosenMovie.title} >
            </Footer>
        </>
    )
}



