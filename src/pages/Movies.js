import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Movies() {
    const [ cards, setCards ] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

        promise.then(response => {
            setCards(response.data);
        });
        promise.catch(() => console.log("error"));

    }, []);

    return (
        <main>
            <h2 className="flex-center">Selecione o filme</h2>
            <div className="movies-list flex-center">
                {cards.map((card, index) => 
                    <Cards key={card.id} image={card.posterURL} />
                )}
            </div>
        </main>
    )
}

function Cards ( { image } ) {
    return (
        <div className="movie-card">
            <img className="movie-card-img" src={image} alt="" />
        </div>
    )
}