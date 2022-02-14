import React from "react";
import {Badge} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const GenreBadge = ({genre}) => {
    return (
        <Badge color="success">{genre}</Badge>
    );
};

export default GenreBadge;