import {axiosService} from "./axios.service";
import {API_KEY, urls} from "../constants/urls";

export const genreService = {
    getAll: () => axiosService.get(`${urls.genres}/${urls.movies}/list?api_key=${API_KEY}`).then(value => value.data.genres)
}
