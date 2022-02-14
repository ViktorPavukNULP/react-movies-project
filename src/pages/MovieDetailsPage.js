import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getMovieById} from "../store/movieDetails.slice";
import MovieDetails from "../components/MovieDetails/MovieDetails";

const MovieDetailsPage = () => {
    const {id} = useParams();
    const {movieDetails, status, error} = useSelector(state => state['movieDetailsReducer']);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getMovieById(id))
    }, [])

    return (
        <>
            {status === "pending" && <h2>Loading...</h2>}
            {status === "rejected" && <h2>{error}</h2>}
            {status === "fulfilled" && <MovieDetails movie={movieDetails}/>}
        </>
    );
};

export default MovieDetailsPage;