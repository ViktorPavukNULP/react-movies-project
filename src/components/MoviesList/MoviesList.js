import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";

import MovieCard from "../MovieCard/MovieCard";
import {getMovies} from "../../store/movie.slice";
import {getGenres} from "../../store/genre.slice";
import "./MoviesList.css";

const MoviesList = () => {
    const {movies, page, status, error, currentY} = useSelector(state => state["movieReducer"]);
    const {genres} = useSelector(state => state["genreReducer"]);
    const dispatch = useDispatch();
    const MoviesListRef = useRef();

    useEffect(() => {
        if (genres.length === 0) {
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