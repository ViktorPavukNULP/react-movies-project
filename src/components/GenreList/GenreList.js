import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getGenres} from "../../store/genre.slice";

const {useSelector} = require("react-redux");

const GenreList = () => {
    const {genres} = useSelector(state => state['genreReducer'])
    const dispatch = useDispatch();

    useEffect(() => {
        if (genres.length === 0){
            dispatch(getGenres());
        }
    }, [])
    return (
        <div className="GenreList">
            <ul>
                {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
            </ul>
        </div>
    );
};

export default GenreList;