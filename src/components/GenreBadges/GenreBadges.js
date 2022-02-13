import React from "react";
import {Badge} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./GenreBadges.css";

const GenreBadges = ({genres}) => {
    return (
        <div className="GenreBadges">
            {genres.map(genre=><Badge color="success">{genre}</Badge>)}
        </div>
    );
};

export default GenreBadges;