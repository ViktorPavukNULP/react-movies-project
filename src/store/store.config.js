import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "./movie.slice";
import genreReducer from "./genre.slice";

const storeConfig = configureStore({
    reducer: {
        movieReducer,
        genreReducer
    }
})

export default storeConfig