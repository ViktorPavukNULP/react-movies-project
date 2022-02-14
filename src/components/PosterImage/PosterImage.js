import React from "react";

const PosterImage = ({poster_path}) => {
    const BASE_URL = "http://image.tmdb.org/t/p/";
    const SIZE = "w500";

    return (
        <img src={`${BASE_URL}${SIZE}${poster_path}`} alt="movie image"/>
    );
};

export default PosterImage;