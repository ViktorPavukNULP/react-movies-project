import React from "react";
import {useParams} from "react-router-dom";

const MovieDetailsPage = () => {
    const {id} = useParams();



    return (
        <div>
            {id}
        </div>
    );
};

export default MovieDetailsPage;