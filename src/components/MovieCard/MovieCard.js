import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {setCurrentY} from "../../store/movie.slice";
import StarsRating from "../StarsRating/StarsRating";

import "./MovieCard.css";
import GenreBadges from "../GenreBadges/GenreBadges";

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
            <div><img src={`${BASE_URL}${SIZE}${movie.poster_path}`} onClick={toDetails} alt={movie.title}/></div>
            <div className="MovieCardInfo">
                <h2 onClick={toDetails}>{movie.title}</h2>
                <GenreBadges genres={movie.genre_ids}/>
                <p>{movie.overview}</p>
            </div>
            <StarsRating vote={movie.vote_average}/>
        </div>
    );
};

export default MovieCard;