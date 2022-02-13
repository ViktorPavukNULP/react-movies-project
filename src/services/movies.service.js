import {axiosService} from "./axios.service";
import {API_KEY, urls} from "../constants/urls";


export const movieService = {
    getPopular: (page) => axiosService.get(`${urls.movies}/${urls.popular}?api_key=${API_KEY}&page=${page}`).then(value => value.data.results),
    getById: (id) => axiosService.get(`${urls.movies}/${id}?api_key=${API_KEY}`)
}
