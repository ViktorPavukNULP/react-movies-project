import React from "react";

import "./MovieCard.css";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentY} from "../../store/movie.slice";

const MovieCard = ({movie, MoviesListRef}) => {
    const BASE_URL = "http://image.tmdb.org/t/p/";
    const SIZE = "w300";

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toDetails = ()=>{
        dispatch(setCurrentY(MoviesListRef.current.scrollTop));
        navigate(movie.id.toString());
    }
    return (
        <div className="MovieCard">
            <img src={`${BASE_URL}${SIZE}${movie.poster_path}`} onClick={toDetails} alt={movie.title}/>
            <h2 onClick={toDetails}>{movie.title}</h2>
            <h3>Vote: {movie.vote_average}</h3>
        </div>
    );
};

export default MovieCard;