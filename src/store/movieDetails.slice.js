import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../services/movies.service";

export const getMovieById = createAsyncThunk(
    "movieDetailsSlice/GetMovieById",
    async (id, {rejectedWithValue}) => {
        try {
            return await movieService.getById(id)
        } catch (e) {
            return rejectedWithValue(e.message)
        }
    }
)

const movieDetailsSlice = createSlice({
    name: "movieDetailsSlice",
    initialState: {
        movieDetails: null,
        status: null,
        error: null
    },
    extraReducers: {
        [getMovieById.pending]: (state) => {
            state.status = "pending";
        },
        [getMovieById.fulfilled]: (state, action) => {
            state.status = "fulfilled";
            state.movieDetails = action.payload;
        },
        [getMovieById.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        }
    }
})

const movieDetailsReducer = movieDetailsSlice.reducer;
export default movieDetailsReducer;