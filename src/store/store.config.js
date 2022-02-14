import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "./movie.slice";
import movieDetailsReducer from "./movieDetails.slice";
import genreReducer from "./genre.slice";

const storeConfig = configureStore({
    reducer: {
        movieReducer,
        movieDetailsReducer,
        genreReducer
    }
})

export default storeConfig