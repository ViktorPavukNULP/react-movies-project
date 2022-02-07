import {Route, Routes} from "react-router-dom";

import MoviesPage from "./pages/MoviesPage";
import Layout from "./components/Layout/Layout";
import "./App.css";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="home" element={<MoviesPage/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
