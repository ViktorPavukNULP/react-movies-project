import React from "react";

import GenreBadge from "../GenreBadge/GenreBadge";
import PosterImage from "../PosterImage/PosterImage";
import StarsRating from "../StarsRating/StarsRating";
import "./MovieDetails.css";

const MovieDetails = ({movie}) => {
    const {poster_path,title,genres,vote_average,budget, production_companies, overview} = movie;
    return (
        <div className="MovieDetails">
            <PosterImage poster_path={poster_path}/>
            <div className="MovieDetailsInfo">
                <h2>{title}</h2>
                {genres.map(genre => <GenreBadge key={genre.id} genre={genre.name}/>)}
                {movie.production_countries.map(country => <h6>{country.name}</h6>)}
                <StarsRating vote={vote_average} emptyColor="black"/>
                <h5>Rating: {vote_average}</h5>
                {budget > 0 && <h5>Budget: {budget}$</h5>}
                {production_companies.map(company => <li key={company.id}>{company.name}</li>)}
                <p>{overview}</p>
            </div>
        </div>
    );
};

export default MovieDetails;