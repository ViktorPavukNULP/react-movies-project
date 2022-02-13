import React from "react";
import StarRatings from 'react-star-ratings';

import "./StarsRating.css"

const StarsRating = ({vote}) => {
    return (
            <StarRatings
                rating={vote}
                starRatedColor="rgb(120, 200, 60)"
                starDimension="25px"
                starSpacing="1px"
                numberOfStars={10}
                name='rating'
            />
    );
};

export default StarsRating;