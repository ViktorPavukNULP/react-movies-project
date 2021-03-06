import React from "react";
import StarRatings from 'react-star-ratings';

import "./StarsRating.css"

const StarsRating = ({vote, emptyColor}) => {
    return (
        <StarRatings
            rating={vote}
            starRatedColor="rgb(25,	135, 84)"
            starEmptyColor= {emptyColor}
            starDimension="25px"
            starSpacing="2px"
            numberOfStars={10}
            name='rating'
        />
    );
};

export default StarsRating;