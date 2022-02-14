import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../services/movies.service";

export const getMovies = createAsyncThunk(
    "movieSlice/GetMovies",
    async (page, {rejectedWithValue}) => {
        try {
            return await movieService.getPopular(page)
        } catch (e) {
            return rejectedWithValue(e.message)
        }
    }
)

const movieSlice = createSlice({
    name: "movieSlice",
    initialState: {
        movies: [],
        page: 1,
        status: null,
        error: null,
        currentY: 0,
        movieDetails: null
    },
    reducers: {
        setCurrentY: (state, action) => {
            state.currentY = action.payload;
        }
    },
    extraReducers: {
        [getMovies.pending]: (state) => {
            state.status = "pending";
        },
        [getMovies.fulfilled]: (state, action) => {
            state.status = "fulfilled";
            state.page += 1;
            state.movies = state.movies.concat(action.payload);
        },
        [getMovies.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        }
    }
})

const movieReducer = movieSlice.reducer;
export default movieReducer;
export const {setCurrentY} = movieSlice.actions;