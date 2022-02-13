import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";

import MovieCard from "../MovieCard/MovieCard";
import {getGenres, getMovies} from "../../store/movie.slice";
import "./MoviesList.css";

const MoviesList = () => {
    const {movies, allGenres, page, status, error, currentY} = useSelector(state => state["movieReducer"]);
    const dispatch = useDispatch();
    const MoviesListRef = useRef();

    useEffect(() => {
        if (allGenres.length === 0) {
            dispatch(getGenres());
        }
        if (movies.length === 0) {
            dispatch(getMovies(page));
        }
        MoviesListRef.current.scrollTop = currentY;
    }, [])

    const onScroll = () => {
        if (MoviesListRef.current) {
            const {scrollTop, scrollHeight, clientHeight} = MoviesListRef.current;
            if ((Math.round(scrollTop + clientHeight) + 200 >= scrollHeight) && (status === "fulfilled")) {
                dispatch(getMovies(page));
            }
        }
    }

    return (
        <div className="MoviesList" onScroll={onScroll} ref={MoviesListRef}>
            {movies.map(movie => <MovieCard key={movie.id} movie={movie} MoviesListRef={MoviesListRef}/>)}
            <div className="MoviesListResponse">
                {status === "pending" && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}
            </div>
        </div>
    );
};

export default MoviesList;