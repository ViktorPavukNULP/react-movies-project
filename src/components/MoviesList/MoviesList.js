import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";

import MovieCard from "../MovieCard/MovieCard";
import {loadMovies} from "../../store/movie.slice";
import "./MoviesList.css";

const MoviesList = () => {

    const {movies, page, status, error} = useSelector(state => state["movieReducer"]);
    const dispatch = useDispatch();
    const MoviesListRef = useRef();

    useEffect(() => {
        dispatch(loadMovies(page));
    }, [])

    // const getMore = () => {
    //     dispatch(loadMovies(page));
    // }

    const onScroll = () => {
        if (MoviesListRef.current) {
            const {scrollTop, scrollHeight, clientHeight} = MoviesListRef.current;
            // console.log(Math.round(scrollTop + clientHeight), scrollHeight, status);
            if ((Math.round(scrollTop + clientHeight) + 200 >= scrollHeight) && (status === "fulfilled")) {
                console.log("reached bottom");
                dispatch(loadMovies(page));
            }
        }
    }

    return (
        <div>
            <div className="MoviesList" onScroll={onScroll} ref={MoviesListRef}>
                {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
                {status === "pending" && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}
            </div>
            {/*<button onClick={getMore}>Load More</button>*/}
        </div>
    );
};

export default MoviesList;