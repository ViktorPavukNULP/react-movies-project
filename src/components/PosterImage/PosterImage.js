import React from "react";

import {ImageBaseURL} from "../../constants/urls";

const PosterImage = ({poster_path}) => {
    const SIZE = "w500";

    return (
        <img src={`${ImageBaseURL}${SIZE}${poster_path}`} alt="movie poster"/>
    );
};

export default PosterImage;