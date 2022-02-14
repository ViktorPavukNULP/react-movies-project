import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {setCurrentY} from "../../store/movie.slice";
import StarsRating from "../StarsRating/StarsRating";
import GenreBadges from "../GenreBadges/GenreBadges";
import MovieCardImage from "../MovieCardImage/MovieCardImage";
import "./MovieCard.css";

const MovieCard = ({movie, MoviesListRef}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toDetails = ()=>{
        dispatch(setCurrentY(MoviesListRef.current.scrollTop));
        navigate(movie.id.toString());
    }
    return (
        <div className="MovieCard">
            <div>
                <MovieCardImage backdrop_path={movie.backdrop_path} toDetails={toDetails}/>
                <div className="MovieCardInfo">
                    <h2 onClick={toDetails}>{movie.title}</h2>
                    <GenreBadges genreIds={movie.genre_ids}/>
                    <p>{movie.overview}</p>
                </div>
            </div>
            <StarsRating vote={movie.vote_average} emptyColor="grey"/>
        </div>
    );
};

export default MovieCard;