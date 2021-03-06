import {Navigate, Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import GenresPage from "./pages/GenresPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path="movies" element={<MoviesPage/>}/>
                <Route path="movies/:id" element={<MovieDetailsPage/>}/>
                <Route path="genres" element={<GenresPage/>}>
                {/*    */}
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
