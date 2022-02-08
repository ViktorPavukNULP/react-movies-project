import {createAsyncThunk ,createSlice} from "@reduxjs/toolkit";
import {movieService} from "../services/movies.service";

export const loadMovies = createAsyncThunk(
    "movieSlice/LoadMovies",
    async (page,{rejectedWithValue}) => {
        try {
            console.log(page);
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
        error: null
    },
    reducers: {

    },
    extraReducers: {
        [loadMovies.pending] : (state) => {
            state.status = "pending";
        },
        [loadMovies.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.status = "fulfilled";
            state.page += 1;
            state.movies = state.movies.concat(action.payload);
        },
        [loadMovies.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        }
    }
})

const movieReducer = movieSlice.reducer;
export default movieReducer;
export const {addMovies} = movieSlice.actions;