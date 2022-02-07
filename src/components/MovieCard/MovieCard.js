import React from "react";

import "./MovieCard.css";

const MovieCard = ({movie}) => {
    return (
        <div className="MovieCard">
            <h2>{movie.title}</h2>
            <h3>Vote: {movie.vote_average}</h3>
        </div>
    );
};

export default MovieCard;