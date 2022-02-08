import React from "react";

import "./MovieCard.css";

const MovieCard = ({movie}) => {
    const BASE_URL = "http://image.tmdb.org/t/p/";
    const SIZE = "w300";
    return (
        <div className="MovieCard">
            <img src={`${BASE_URL}${SIZE}${movie.poster_path}`} alt=""/>
            <h2>{movie.title}</h2>
            <h3>Vote: {movie.vote_average}</h3>
        </div>
    );
};

export default MovieCard;