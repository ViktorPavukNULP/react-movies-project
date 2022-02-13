import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";

import MovieCard from "../MovieCard/MovieCard";
import {loadMovies} from "../../store/movie.slice";
import "./MoviesList.css";

const MoviesList = () => {

    const {movies, page, status, error, currentY} = useSelector(state => state["movieReducer"]);
    const dispatch = useDispatch();
    const MoviesListRef = useRef();

    useEffect(() => {
        if (!movies){
            dispatch(loadMovies(page));
        }
        MoviesListRef.current.scrollTop = currentY;
    }, [])

    const onScroll = () => {
        if (MoviesListRef.current) {
            const {scrollTop, scrollHeight, clientHeight} = MoviesListRef.current;
            if ((Math.round(scrollTop + clientHeight) + 200 >= scrollHeight) && (status === "fulfilled")) {
                console.log("reached bottom");
                dispatch(loadMovies(page));
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