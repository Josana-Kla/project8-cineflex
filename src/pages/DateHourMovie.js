import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import DateMovie from "../components/date-movie/DateMovie";
import Footer from "../components/footer/Footer";

export default function DateAndHour() {
    const [ sessions, setSessions ] = useState([]);
    const { idFilme } = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`);

        promise.then((response) => {
            setSessions(response.data.days)
        });
        promise.catch(() => console.log("error"));

    }, []);


    return (
        <>
            <main>
                <h2 className="flex-center">Selecione o horário</h2>
                <div className="date">
                    {sessions.map((session, index) => (
                        <DateMovie day={session.weekday} date={session.date} key={index} />
                    ))}
                </div>
            </main>

            <Footer />
        </>
    )
}

