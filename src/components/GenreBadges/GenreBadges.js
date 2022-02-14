import React from "react";
import {useSelector} from "react-redux";

import GenreBadge from "../GenreBadge/GenreBadge";
import "./GenreBadges.css";

const GenreBadges = ({genreIds}) => {
    const {genres} = useSelector(state => state["genreReducer"]);
    return (
        <div className="GenreBadges">
            {genreIds.map(genreId => <GenreBadge color="success" key={genreId} genre={genres.find(genre => genre.id === genreId).name}/>)}
        </div>
    );
};

export default GenreBadges;