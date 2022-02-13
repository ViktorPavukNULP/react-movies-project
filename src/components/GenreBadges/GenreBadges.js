import React from "react";
import {Badge} from "reactstrap";
import {useSelector} from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import "./GenreBadges.css";

const GenreBadges = ({genreIds}) => {
    const {allGenres} = useSelector(state => state["movieReducer"])
    return (
        <div className="GenreBadges">
            {genreIds.map(genreId => <Badge color="success" key={genreId}>{allGenres.find(genre => genre.id === genreId).name}</Badge>)}
        </div>
    );
};

export default GenreBadges;