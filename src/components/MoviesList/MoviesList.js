import React, {useEffect, useState} from "react";

import {movieService} from "../../services/movies.service";
import MovieCard from "../MovieCard/MovieCard";
import "./MoviesList.css";

const MoviesList = () => {

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        movieService.getPopular(1).then(value => setMovies(value.results))
    },[])

    return (
        <div className="MoviesList">
            {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default MoviesList;