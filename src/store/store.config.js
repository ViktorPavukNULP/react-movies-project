import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "./movie.slice";

const storeConfig = configureStore({
    reducer: {
        movieReducer
    }
})

export default storeConfig