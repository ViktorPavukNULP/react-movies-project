import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../services/genre.service";

export const getGenres = createAsyncThunk(
    "genreSlice/GetGenres",
    async (_, {rejectedWithValue}) => {
        try {
            return await genreService.getAll()
        } catch (e) {
            return rejectedWithValue(e.message)
        }
    }
)

const genreSlice = createSlice({
    name: "genreSlice",
    initialState: {
        genres: [],
        status: null,
        error: null
    },
    extraReducers: {
        [getGenres.pending]: (state) => {
            state.status = "pending";
        },
        [getGenres.fulfilled]: (state, action) => {
            state.status = "fulfilled";
            state.genres = action.payload;
        },
        [getGenres.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        }
    }
});

const genreReducer = genreSlice.reducer;
export default genreReducer;