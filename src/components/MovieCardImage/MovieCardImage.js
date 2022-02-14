import React from "react";

import {ImageBaseURL} from "../../constants/urls";

const MovieCardImage = ({backdrop_path, toDetails}) => {
    const SIZE = "w300";

    return (
        <img src={`${ImageBaseURL}${SIZE}${backdrop_path}`} onClick={toDetails} alt="movie poster"/>
    );
};

export default MovieCardImage;