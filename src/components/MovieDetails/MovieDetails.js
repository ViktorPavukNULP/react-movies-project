import React from "react";

import GenreBadge from "../GenreBadge/GenreBadge";
import PosterImage from "../PosterImage/PosterImage";
import StarsRating from "../StarsRating/StarsRating";
import "./MovieDetails.css";

const MovieDetails = ({movie}) => {

    return (
        <div className="MovieDetails">
            <PosterImage poster_path={movie.poster_path}/>
            <div>
                <h2>{movie.title}</h2>
                {movie.genres.map(genre => <GenreBadge key={genre.id} genre={genre.name}/>)}
                {movie.production_countries.map(country => <h6>{country.name}</h6>)}
                <StarsRating vote={movie.vote_average}/>
                <h5>Rating: {movie.vote_average}</h5>
                <h5>Budget: {movie.budget}$</h5>
                {movie.production_companies.map(company => <li key={company.id}>{company.name}</li>)}
                <p>{movie.overview}</p>
            </div>
        </div>
    );
};

export default MovieDetails;