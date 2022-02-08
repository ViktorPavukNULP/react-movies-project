import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import MovieCard from "../MovieCard/MovieCard";
import {loadMovies} from "../../store/movie.slice";
import "./MoviesList.css";

const MoviesList = () => {

    const {movies, page, status, error} = useSelector(state => state["movieReducer"]);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(loadMovies(page));
    }, [])

    const getMore = () => {
        dispatch(loadMovies(page));
    }

    return (
        <div>
            <div className="MoviesList">
                {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
                {status === "pending" && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}
            </div>
            <button onClick={getMore}>Load More</button>
        </div>
    );
};

export default MoviesList;