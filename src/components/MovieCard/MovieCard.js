import React from "react";

import "./MovieCard.css";
import {useNavigate} from "react-router-dom";

const MovieCard = ({movie}) => {
    const BASE_URL = "http://image.tmdb.org/t/p/";
    const SIZE = "w300";

    const navigate = useNavigate();

    const toDetails = ()=>{
        navigate(movie.id.toString());
    }
    return (
        <div className="MovieCard" onClick={toDetails}>
            <img src={`${BASE_URL}${SIZE}${movie.poster_path}`} alt=""/>
            <h2>{movie.title}</h2>
            <h3>Vote: {movie.vote_average}</h3>
        </div>
    );
};

export default MovieCard;